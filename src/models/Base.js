import assign from 'lodash/assign'


class Base {
  static modelName = 'Base';

  constructor(props) {
    assign(this, props);
  }
}

export default Base;