import Base from './Base';
import assign from 'lodash/assign'

class Posts extends Base {
  static modelName = 'Posts';

  constructor(props) {
    super(props);
    assign(this, props);
  }
}

export default Posts;