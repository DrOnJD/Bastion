import store from 'store';
import Model from 'store/reduxModels/Model';


class Base extends Model {
  static modelName = 'Base';

  get __store() {
    return store.getState();
  }
}

export default Base;
