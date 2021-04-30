import {all, put, takeLatest, call} from 'redux-saga/effects';

import {Types} from '~/store/ducks/user';

import {authSignIn} from '~/services/user';

function* loginUserSagas({payload: {email, password}}) {
  try {
    const response = yield call(authSignIn, email, password);
    if (response.status >= 200 && response.status < 300) {
      const {investor} = response.data;
      const accessToken = response.headers['access-token'];
      const {client} = response.headers;
      const {uid} = response.headers;

      return yield put({
        type: Types.LOGIN_USER_SUCCESS,
        payload: {investor, accessToken, client, uid},
      });
    }

    return yield put({type: Types.LOGIN_USER_ERROR});
  } catch (error) {
    return yield put({type: Types.LOGIN_USER_ERROR});
  }
}

export default function* watchSaga() {
  yield all([takeLatest(Types.LOGIN_USER, loginUserSagas)]);
}
