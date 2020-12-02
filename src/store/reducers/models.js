import produce from 'immer';
import { handleActions } from 'redux-actions';
import isUndefined from 'lodash/isUndefined';

import actions from 'store/actions/models';
import modelsList from 'store/models';
import { initState } from 'store/reduxModels';


const setId = (payload) => {
  payload.id = isUndefined(payload.id) ? Math.random(3).toString(32).slice(2) : payload.id;
  return payload;
};

const models = handleActions({
  [actions.add]: (state, { model: Model, payload, meta }) => produce(state, ({ [Model.name]: modelsData }) => {
    payload = setId(payload);
    modelsData.items[payload.id] = new Model(payload);
    modelsData.meta = { ...modelsData.meta, ...meta };
  }),
  [actions.addList]: (state, { model: Model, payload, meta }) => produce(state, ({ [Model.name]: modelsData }) => {
    payload = setId(payload);
    payload.forEach((item) => { modelsData.items[payload.id] = new Model(item); });
    modelsData.meta = { ...modelsData.meta, ...meta };
  }),
  [actions.removeMeta]: (state, { model: Model }) => produce(state, ({ [Model.name]: modelsData }) => {
    modelsData.meta = {};
  }),
  [actions.removeMetaItem]: (state, { model: Model, payload }) => produce(state, ({ [Model.name]: modelsData }) => {
    delete modelsData.meta[payload];
  }),
  [actions.remove]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelMap }) => {
    delete modelMap.items[payload.id];
  }),
  [actions.removeList]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: modelsMap }) => {
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
