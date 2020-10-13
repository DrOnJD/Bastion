import { createAction } from '../reduxModels';


export default {
  add: createAction('ADD'),
  update: createAction('UPDATE'),
  delete: createAction('DELETE'),
};
