import assign from 'lodash/assign';

import Base from 'store/reduxModels/Model';
import { Post } from 'store/models';


class User extends Base {
  static modelName = 'User';

  dependencies() {
    return [
      { model: Post, from: 'postsIds', to: 'posts' },
      { model: Post, from: 'postId', to: 'post' },
    ];
  }

  constructor(props) {
    super(props);
    assign(this, props);
  }
}

export default User;
