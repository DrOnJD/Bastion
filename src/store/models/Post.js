import PostApi from 'store/api/Post';

import Base from './Base';


class Post extends Base {
  static api = PostApi;

  static modelName = 'Post';
}

export default Post;
