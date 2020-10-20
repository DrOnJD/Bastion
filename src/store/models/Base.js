import store from 'store';
import Model from 'store/reduxModels/model';


class Base extends Model {
  static modelName = 'Base';

  get _store() {
    return store.getState();
  }
}

export default Base;
