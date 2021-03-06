import assign from 'lodash/assign';
import isArray from 'lodash/isArray';
import noop from 'lodash/noop';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

import { selectModel } from 'store/selectors/models';


export default class Model {
  constructor(props) {
    assign(this, this.transformData(props, 'camel'));
    ((this.dependencies || noop)() || []).forEach(this.defineDependency.bind(this));
  }

  defineDependency({ model, from, to }) {
    if (this[from] === undefined) return;
    Object.defineProperty(this, to, {
      get: () => isArray(this[from])
        ? this[from].map((id) => selectModel(model, id)(this._store))
        : selectModel(model, this[from])(this._store),
    });
  }

  transformData(data, to) {
    if (to === 'camel') return Object.entries(data).reduce((acc, [name, value]) => ({ ...acc, [camelCase(name)]: value }), {});
    if (to === 'snake') return Object.entries(data).reduce((acc, [name, value]) => ({ ...acc, [snakeCase(name)]: value }), {});
    return data;
  }
}
