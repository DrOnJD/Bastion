import UserApi from 'store/api/User';
import { Post } from 'store/models';

import Base from './Base';


class User extends Base {
  static api = UserApi;

  static modelName = 'User';

  dependencies() {
    return [
      { model: Post, from: 'postsIds', to: 'posts' },
      { model: Post, from: 'postId', to: 'post' },
    ];
  }
}

export default User;
