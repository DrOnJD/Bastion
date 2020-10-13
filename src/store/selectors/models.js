import { createSelector } from 'reselect';


const selectModels = (store) => store.models;
const selectModelsMap = (Model) => createSelector(selectModels, (models) => models[Model.name]);
const selectModel = (Model, id) => createSelector(selectModelsMap(Model), (modelsMap) => modelsMap[id]);

export {
  selectModels,
  selectModelsMap,
  selectModel,
};
