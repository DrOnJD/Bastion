import { createAction } from 'store/reduxModels';


export default {
  add: createAction('ADD'),
  addList: createAction('ADD_LIST'),
  update: createAction('UPDATE'),
  updateList: createAction('UPDATE_LIST'),
  remove: createAction('REMOVE'),
  removeList: createAction('REMOVE_LIST'),
  get: createAction('GET'),
  post: createAction('POST'),
  patch: createAction('PATCH'),
  delete: createAction('DELETE'),
};
