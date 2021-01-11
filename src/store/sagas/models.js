import { takeEvery, put } from 'redux-saga/effects';
import isArray from 'lodash/isArray';

import actions from 'store/actions/models';
import { Notification } from 'store/models';


const messageStatus = (statusCode) => {
  if (statusCode < 400) return 'success';
  if (statusCode >= 400) return 'error';
  return 'warning';
};

function* errorHandler(model, { data, status }) {
  yield put(actions.addMeta(model, { status: 'reject' }));
  if (data?.message) yield put(actions.add(Notification, { message: data?.message, status: messageStatus(status) }));
}


function* getModel({ model, payload, meta }) {
  const api = new model.api();
  try {
    yield put(actions.addMeta(model, { status: 'pending' }));
    const { data: { data, message }, status } = yield api.get(payload);

    if (message) yield put(actions.add(Notification, { message, status: messageStatus(status) }));

    if (isArray(data)) {
      yield put(actions.addList(model, data, { ...meta, status: 'success' }));
    } else {
      yield put(actions.add(model, data, { ...meta, status: 'success' }));
    }
  } catch ({ response }) {
    yield errorHandler(model, response);
  }
}

function* postModel({ model, payload, meta }) {
  const api = new model.api();
  try {
    yield put(actions.addMeta(model, { status: 'pending' }));
    const { data: { data, message }, status } = yield api.post(payload);

    if (message) yield put(actions.add(Notification, { message, status: messageStatus(status) }));

    if (isArray(data)) {
      yield put(actions.addList(model, data, { ...meta, status: 'success' }));
    } else {
      yield put(actions.add(model, data, { ...meta, status: 'success' }));
    }
  } catch ({ response }) {
    yield errorHandler(model, response);
  }
}

function* deleteModel({ model }) {
  const api = new model.api();
  try {
    yield put(actions.addMeta(model, { status: 'pending' }));
    const { data: { message }, status } = yield api.delete();

    if (message) yield put(actions.add(Notification, { message, status: messageStatus(status) }));

    /* if (isArray(data)) {
      yield put(actions.addList(model, data, meta));
      yield put(actions.addMeta(model, { status: 'success' }));
    } else {
      yield put(actions.add(model, data, meta));
      yield put(actions.addMeta(model, { status: 'success' }));
    } */
  } catch ({ response }) {
    yield errorHandler(model, response);
  }
}

function* sagas() {
  yield takeEvery(actions.get, getModel);
  yield takeEvery(actions.post, postModel);
  yield takeEvery(actions.delete, deleteModel);
}

export default sagas;
