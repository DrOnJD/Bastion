import { createSelector } from 'reselect';


const selectModelsStore = (store) => store.models;
const selectModels = (Model) => createSelector(selectModelsStore, (models) => models[Model.name]);
const selectModelsMap = (Model) => createSelector(selectModels(Model), ({ items }) => items);
const selectModelsMeta = (Model) => createSelector(selectModels(Model), ({ meta }) => meta);
const selectModel = (Model, id) => createSelector(selectModelsMap(Model), (modelsMap) => modelsMap[id]);
const selectCurrentModel = (Model) => createSelector(
  selectModelsMap(Model),
  selectModelsMeta(Model),
  (modelsMap, meta) => modelsMap[meta.current],
);

export {
  selectModelsStore,
  selectModels,
  selectModelsMap,
  selectModelsMeta,
  selectModel,
  selectCurrentModel,
};
