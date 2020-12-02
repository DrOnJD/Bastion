import { createAction } from 'store/reduxModels';


export default {
  add: createAction('ADD'),
  addList: createAction('ADD_LIST'),
  update: createAction('UPDATE'),
  updateList: createAction('UPDATE_LIST'),
  remove: createAction('REMOVE'),
  removeList: createAction('REMOVE_LIST'),

  addMeta: createAction('ADD_META'),
  removeMeta: createAction('REMOVE_META'),
  removeMetaItem: createAction('REMOVE_META_ITEM'),

  get: createAction('GET'),
  post: createAction('POST'),
  patch: createAction('PATCH'),
  delete: createAction('DELETE'),
};
