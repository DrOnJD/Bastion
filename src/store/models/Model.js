import MadelApi from 'store/api/Models';

import Base from './Base';


class Model extends Base {
  static api = MadelApi;

  static modelName = 'Model';
}

export default Model;
