import axios from 'axios';
import { Storage } from 'modules/helpers/storage';

import { SERVER_API_URL, AUTH_TOKEN_KEY } from 'settings';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

export const setupAxiosInterceptors = (onUnauthenticated) => {
  const onRequestSuccess = (config) => {
    const token = Storage.local.get(AUTH_TOKEN_KEY) || Storage.session.get(AUTH_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = (err) => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export const AuthType = {
  AUTH_LOGIN: 'authentication/LOGIN',
  AUTH_LOGOUT: 'authentication/LOGOUT',
  AUTH_ERROR: 'authentication/ERROR',
  AUTH_CHECK: 'authentication/CHECK',
};

export const clearAuthToken = () => {
  if (Storage.local.get(AUTH_TOKEN_KEY)) {
    Storage.local.remove(AUTH_TOKEN_KEY);
  }
  if (Storage.session.get(AUTH_TOKEN_KEY)) {
    Storage.session.remove(AUTH_TOKEN_KEY);
  }
};

export default async (type, params) => {
  if (type === AuthType.AUTH_LOGIN) {
    const { username, password, rememberMe } = params;

    const result = await axios.post('api/authenticate', {
      username,
      password,
      rememberMe,
    });

    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
      const jwt = bearerToken.slice(7, bearerToken.length);
      if (rememberMe) {
        Storage.local.set(AUTH_TOKEN_KEY, jwt);
      } else {
        Storage.session.set(AUTH_TOKEN_KEY, jwt);
      }
    }
    return result;
  }
  if (type === AuthType.AUTH_LOGOUT) {
    clearAuthToken();
    return Promise.resolve();
  }
  if (type === AuthType.AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      clearAuthToken();
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AuthType.AUTH_CHECK) {
    const token = Storage.local.get(AUTH_TOKEN_KEY) || Storage.session.get(AUTH_TOKEN_KEY);
    return token ? Promise.resolve() : Promise.reject();
  }
  return Promise.reject('Unkown method');
};
