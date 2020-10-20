import SessionApi from 'store/api/Session';

import Base from './Base';
import User from './User';


class Session extends Base {
  static api = SessionApi;

  static modelName = 'Session';

  dependencies() {
    return [
      { model: User, from: 'userId', to: 'user' },
    ];
  }
}

export default Session;
