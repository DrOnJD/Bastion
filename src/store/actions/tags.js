import { createAction } from 'store/reduxModels';


export default {
  add: createAction('ADD_TAG'),
  remove: createAction('REMOVE_TAG'),
};
