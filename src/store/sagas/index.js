import {all, fork} from 'redux-saga/effects';

import companiesSagas from './companies';
import userSagas from './user';

export default function* sagas() {
  yield all([fork(companiesSagas), fork(userSagas)]);
}
