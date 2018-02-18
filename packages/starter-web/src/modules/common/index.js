import { createAction, handleActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const loadApp = createAction('APP_LOAD', (token) => {
  if (token) {
    agent.setToken(token);
  }
  return {
    user: agent.Auth.current(),
    token,
  };
});
export const redirect = createAction('REDIRECT');
export const logout = createAction('LOGOUT');

const initialState = {
  appName: 'Dev Starter',
  token: null,
  appLoaded: false,
  viewChangeCounter: 0,
};

// Reducers
export default handleActions(
  {
    APP_LOAD: (state, action) => ({
      ...state,
      token: action.payload.token || null,
      appLoaded: true,
      currentUser: action.payload ? action.payload.user : null,
    }),
    REDIRECT: state => ({
      ...state,
      redirectTo: null,
    }),
    LOGOUT: state => ({
      ...state,
      redirectTo: '/',
      token: null,
      currentUser: null,
    }),
  },
  initialState,
);
