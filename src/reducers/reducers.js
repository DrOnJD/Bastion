import produce from 'immer';
import { handleActions } from 'redux-actions';

import modelsList from 'models';
import { initState } from 'asd';
import actions from 'actions';


const models = handleActions({
    [actions.add]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: models }) => {
      models[payload.id] = payload;
    }),
    [actions.delete]: (state, { payload }) => produce(state, ({ [payload.constructor.modelName]: models }) => {
      delete models[payload.id]
    }),
  },
  initState(modelsList),
);

export default {
  models
}