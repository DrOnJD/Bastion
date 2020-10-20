import { takeEvery, put } from 'redux-saga/effects';
import isArray from 'lodash/isArray';

import actions from 'store/actions';


function* getModel({ model, payload, meta }) {
  const api = new model.api();
  const { data } = yield api.get(payload);

  if (isArray(data)) yield put(actions.addList(model, data, meta));
  else yield put(actions.add(model, data, meta));
}

function* sagas() {
  yield takeEvery(actions.get, getModel);
}

export default sagas;
