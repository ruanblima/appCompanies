import axios from 'axios';
import {BASE_PATH} from '~/constants/api';
import api from '~/services/api';

const defaultOptions = {
  auth: true,
  json: false,
  withCredentials: true,
};

function encodeParam(key, value) {
  if (value !== null && value !== undefined)
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

  return `${encodeURIComponent(key)}=`;
}

function buildQuery(params) {
  return params
    ? Object.keys(params)
        .map((key) => encodeParam(key, params[key]))
        .join('&')
    : '';
}

export default {
  async get(path, params = {}, accessToken, client, uid, id) {
    api.defaults.headers.common['access-token'] = accessToken;
    api.defaults.headers.common.client = client;
    api.defaults.headers.common.uid = uid;

    const query = buildQuery(params);

    const url = `${path}${query.length > 0 ? `?${query}` : ''}${
      id ? `/${id}` : ''
    }`;

    return api.get(url);
  },

  post(path, params, options = {}, body = null) {
    const opts = {...defaultOptions, ...options};

    const headers = {
      'Content-Type': opts.json
        ? 'application/json'
        : 'application/x-www-form-urlencoded',
    };

    const url = `${BASE_PATH}${path}${params ? `=${params}` : ''}`;

    return axios.post(url, body, headers);
  },
};
