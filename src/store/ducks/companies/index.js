import {Types as FetchTypes} from '~/store/ducks/user';

export const Types = {
  GET_LIST_COMPANIES: 'GET_LIST_COMPANIES',
  GET_LIST_COMPANIES_SUCCESS: 'GET_LIST_COMPANIES_SUCCESS',
  GET_LIST_COMPANIES_ERROR: 'GET_LIST_COMPANIES_ERROR',

  GET_COMPANY: 'GET_COMPANY',
  GET_COMPANY_SUCCESS: 'GET_COMPANY_SUCCESS',
  GET_COMPANY_ERROR: 'GET_COMPANY_ERROR',

  GET_COMPANIES_PER_TYPES: 'GET_COMPANIES_PER_TYPES',
  GET_COMPANIES_PER_TYPES_SUCCESS: 'GET_COMPANIES_PER_TYPES_SUCCESS',
  GET_COMPANIES_PER_TYPES_ERROR: 'GET_COMPANIES_PER_TYPES_ERROR',
};

const INITIAL_STATE = {
  loadingListCompanies: false,
  companies: null,
  comapniesHasError: false,

  loadingCompany: false,
  company: null,
  companyHasError: false,

  loadingListCompaniesPerTypes: false,
  companiesPerTypes: null,
  companiesPerTypesHasError: false,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case FetchTypes.LOGOUT:
      return INITIAL_STATE;

    case Types.GET_LIST_COMPANIES:
      return {
        ...state,
        loadingListCompanies: true,
      };
    case Types.GET_LIST_COMPANIES_SUCCESS:
      return {
        ...state,
        loadingListCompanies: false,
        companies: payload.companies,
        comapniesHasError: false,
      };
    case Types.GET_LIST_COMPANIES_ERROR:
      return {
        ...state,
        loadingListCompanies: false,
        comapniesHasError: true,
      };

    case Types.GET_COMPANY:
      return {
        ...state,
        loadingCompany: true,
      };
    case Types.GET_COMPANY_SUCCESS:
      return {
        ...state,
        loadingCompany: false,
        company: payload.company,
        companyHasError: false,
      };
    case Types.GET_COMPANY_ERROR:
      return {
        ...state,
        loadingCompany: false,
        companyHasError: true,
        company: null,
      };

    case Types.GET_COMPANIES_PER_TYPES:
      return {
        ...state,
        loadingListCompaniesPerTypes: true,
      };
    case Types.GET_COMPANIES_PER_TYPES_SUCCESS:
      return {
        ...state,
        loadingListCompaniesPerTypes: false,
        companiesPerTypes: payload.companiesPerTypes,
        companiesPerTypesHasError: false,
      };
    case Types.GET_COMPANIES_PER_TYPES_ERROR:
      return {
        ...state,
        loadingListCompaniesPerTypes: false,
        companiesPerTypesHasError: true,
        companiesPerTypes: null,
      };
    default:
      return state;
  }
}

export const getCompanies = (accessToken, client, uid) => ({
  type: Types.GET_LIST_COMPANIES,
  payload: {
    accessToken,
    client,
    uid,
  },
});

export const getComany = (accessToken, client, uid, id) => ({
  type: Types.GET_COMPANY,
  payload: {
    accessToken,
    client,
    uid,
    id,
  },
});

export const getCompanyPerTypes = (
  accessToken,
  client,
  uid,
  idType,
  nameType,
) => ({
  type: Types.GET_COMPANIES_PER_TYPES,
  payload: {
    accessToken,
    client,
    uid,
    idType,
    nameType,
  },
});
