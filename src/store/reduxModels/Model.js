import assign from 'lodash/assign'
import isArray from 'lodash/isArray'
import noop from 'lodash/noop'

import store from 'store';
import { selectModel } from 'store/selectors/models';

class Base {
  static modelName = 'Base';

  static get store() {
    return store.getState();
  }

  constructor(props) {
    assign(this, props);
    ((this.dependencies || noop)() || []).forEach(this.defineDependency.bind(this));
  }

  defineDependency({ model, from, to }) {
    Object.defineProperty(this, to, {
      get: () => isArray(this[from])
        ? this[from].map((id) => selectModel(model, id)(Base.store))
        : selectModel(model, this[from])(Base.store)
    });
  }
}

export default Base;