import produce from 'immer';
import { handleActions } from 'redux-actions';

import modelsList from '../models';
import { initState } from '../reduxModels';
import actions from '../actions';


const models = handleActions({
  [actions.add]: (state, { model: Model, payload }) => produce(state, ({ [Model.name]: modelsMap }) => {
    modelsMap[payload.id] = new Model(payload);
  }),
  [actions.addList]: (state, { model: Model, payload }) => produce(state, ({ [Model.name]: modelsMap }) => {
    payload.forEach((item) => { modelsMap[item.id] = new Model(item); });
  }),
  [actions.delete]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelMap }) => {
    delete modelMap[payload.id];
  }),
  [actions.deleteList]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelsMap }) => {
    payload.forEach((item) => { delete modelsMap[item.id]; });
  }),
},
initState(modelsList));

export default models;
