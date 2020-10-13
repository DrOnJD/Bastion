import produce from 'immer';
import { handleActions } from 'redux-actions';

import modelsList from '../models';
import { initState } from '../reduxModels';
import actions from '../actions';


const models = handleActions({
  [actions.add]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelMap }) => {
    modelMap[payload.id] = payload;
  }),
  [actions.delete]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelMap }) => {
    delete modelMap[payload.id];
  }),
},
initState(modelsList));

export default models;
