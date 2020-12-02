import UserApi from 'store/api/User';
import { Model } from 'store/models';

import Base from './Base';


class User extends Base {
  static api = UserApi;

  static modelName = 'User';

  dependencies() {
    return [
      { model: Model, from: 'postsIds', to: 'posts' },
      { model: Model, from: 'postId', to: 'post' },
    ];
  }
}

export default User;
