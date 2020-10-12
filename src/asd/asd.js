import { useDispatch as reduxUseDispatch } from 'react-redux';


const createAction = (type) => {
  const actionCreator = (model, payload) => typeof model === 'function' ? { type, payload: new model(payload) } : { type, payload: model };
  actionCreator.toString = () => type.toString();
  return actionCreator;
}
const useDispatch = (action, model, payload) => {
  const dispatch = reduxUseDispatch();
  dispatch(action(model, payload));
}

const initState = (models) => models.reduce((prev, model) => ({...prev, [model.name]: {}}), {});

export {
  createAction,
  useDispatch,
  initState,
}