import Base from './Base';
import assign from 'lodash/assign'

class User extends Base {
  static modelName = 'User';

  constructor(props) {
    super(props);
    assign(this, props);
  }
}

export default User;