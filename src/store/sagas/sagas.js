import { all, fork } from 'redux-saga/effects';

import modelsSagas from './models';
import tagsSagas from './tags';


function* rootSaga() {
  yield all([
    fork(modelsSagas),
    fork(tagsSagas),
  ]);
}

export default rootSaga;
