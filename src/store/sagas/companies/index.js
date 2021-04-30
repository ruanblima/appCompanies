import {all, put, takeLatest, call} from 'redux-saga/effects';

import {Types} from '~/store/ducks/companies';

import {
  getEnterprises,
  listEnterprises,
  listEnterprisesPerTypes,
} from '~/services/companies';

function* getListCompaniesSagas({payload: {accessToken, client, uid}}) {
  try {
    const response = yield call(listEnterprises, accessToken, client, uid);
    if (response.status >= 200 && response.status < 300) {
      const companies = response.data.enterprises;
      return yield put({
        type: Types.GET_LIST_COMPANIES_SUCCESS,
        payload: {companies},
      });
    }

    return yield put({type: Types.GET_LIST_COMPANIES_ERROR});
  } catch (error) {
    return yield put({type: Types.GET_LIST_COMPANIES_ERROR});
  }
}

function* getCompanySagas({payload: {accessToken, client, uid, id}}) {
  try {
    const response = yield call(
      getEnterprises,

      accessToken,
      client,
      uid,
      id,
    );
    if (response.status >= 200 && response.status < 300) {
      const company = response.data.enterprise;
      return yield put({
        type: Types.GET_COMPANY_SUCCESS,
        payload: {company},
      });
    }

    return yield put({type: Types.GET_COMPANY_ERROR});
  } catch (error) {
    return yield put({type: Types.GET_COMPANY_ERROR});
  }
}

function* getListCompaniesPerTypesSagas({
  payload: {accessToken, client, uid, idType, nameType},
}) {
  try {
    const response = yield call(
      listEnterprisesPerTypes,
      accessToken,
      client,
      uid,
      idType,
      nameType,
    );
    if (response.status >= 200 && response.status < 300) {
      const companiesPerTypes = response.data.enterprises;
      return yield put({
        type: Types.GET_COMPANIES_PER_TYPES_SUCCESS,
        payload: {companiesPerTypes},
      });
    }

    return yield put({type: Types.GET_COMPANIES_PER_TYPES_ERROR});
  } catch (error) {
    return yield put({type: Types.GET_COMPANIES_PER_TYPES_ERROR});
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(Types.GET_LIST_COMPANIES, getListCompaniesSagas),
    takeLatest(Types.GET_COMPANY, getCompanySagas),
    takeLatest(Types.GET_COMPANIES_PER_TYPES, getListCompaniesPerTypesSagas),
  ]);
}
