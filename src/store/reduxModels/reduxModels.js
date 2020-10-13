import { useDispatch as reduxUseDispatch } from 'react-redux';


const createAction = (type) => {
  const actionCreator = (Model, payload) => typeof Model === 'function' ? { type, payload: new Model(payload) } : { type, payload: Model };
  actionCreator.toString = () => type.toString();
  return actionCreator;
};

const useDispatch = (action, model, payload) => {
  const dispatch = reduxUseDispatch();
  dispatch(action(model, payload));
};

const initState = (models) => models.reduce((prev, model) => ({ ...prev, [model.name]: {} }), {});

export {
  createAction,
  useDispatch,
  initState,
};
