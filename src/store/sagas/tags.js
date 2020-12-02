import { takeEvery } from 'redux-saga/effects';
import compact from 'lodash/compact';
import without from 'lodash/without';
import uniq from 'lodash/uniq';

import actions from 'store/actions/tags';


function addTag({ payload }) {
  const { location } = window;
  const tags = compact(decodeURI(location.hash).split(','));
  tags.push(payload);
  location.hash = uniq(tags).join(',');
}

function removeTag({ payload }) {
  const { location } = window;
  const tags = compact(location.hash.split(','));
  location.hash = without(tags, payload).join(',');
}

function* sagas() {
  yield takeEvery(actions.add, addTag);
  yield takeEvery(actions.remove, removeTag);
}

export default sagas;
