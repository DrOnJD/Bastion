import assign from 'lodash/assign'

import Base from 'store/reduxModels/Model';


class Post extends Base {
  static modelName = 'Post';

  constructor(props) {
    super(props);
    assign(this, props);
  }
}

export default Post;