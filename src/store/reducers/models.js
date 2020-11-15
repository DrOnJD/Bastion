import produce from 'immer';
import { handleActions } from 'redux-actions';

import modelsList from '../models';
import { initState } from '../reduxModels';
import actions from '../actions';


const models = handleActions({
  [actions.add]: (state, { model: Model, payload, meta }) => produce(state, ({ [Model.name]: modelsData }) => {
    modelsData.items[payload.id] = new Model(payload);
    modelsData.meta = { ...modelsData.meta, ...meta };
  }),
  [actions.addList]: (state, { model: Model, payload, meta }) => produce(state, ({ [Model.name]: modelsData }) => {
    payload.forEach((item) => { modelsData.items[item.id] = new Model(item); });
    modelsData.meta = { ...modelsData.meta, ...meta };
  }),
  [actions.deleteMeta]: (state, { model: Model }) => produce(state, ({ [Model.name]: modelsData }) => {
    modelsData.meta = {};
  }),
  [actions.deleteItem]: (state, { model: Model, payload }) => produce(state, ({ [Model.name]: modelsData }) => {
    delete modelsData.meta[payload];
  }),
  [actions.delete]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelMap }) => {
    delete modelMap.items[payload.id];
  }),
  [actions.deleteList]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelsMap }) => {
    payload.forEach((item) => { delete modelsMap.items[item.id]; });
  }),
  [actions.addMeta]: (state, { model: Model, payload: meta }) => produce(state, ({ [Model.name]: modelsData }) => {
    modelsData.meta = { ...modelsData.meta, ...meta };
  }),
  [actions.addRemove]: (state, { model: Model, payload: metaName }) => produce(state, ({ [Model.name]: modelsData }) => {
    delete modelsData.meta[metaName];
  }),
},
initState(modelsList));

export default models;
