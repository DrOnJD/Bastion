import { takeEvery } from 'redux-saga/effects';

function* asd() {
  yield 1;
}

function* sagas() {
  yield takeEvery('USER_REQUESTED', asd)
}

export default sagas;