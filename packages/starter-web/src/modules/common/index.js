import { createAction, handleActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const loadApp = createAction('APP_LOAD', (token) => {
  console.log('token', token);
  if (token) {
    agent.setToken(token);
  }
  return {
    // user: agent.Auth.current(),
    user: null,
    token,
  };
});
export const redirect = createAction('REDIRECT');

console.log(loadApp(null));
console.log(redirect);

const initialState = {
  appName: 'Dev Starter',
  token: null,
  appLoaded: false,
  viewChangeCounter: 0,
};

// Reducers
const commonreducer = handleActions(
  {
    [loadApp]: (state, action) => ({
      ...state,
      token: action.payload.token || null,
      appLoaded: true,
      currentUser: action.payload ? action.payload.user : null,
    }),
    [redirect]: state => ({
      ...state,
      redirectTo: null,
    }),
  },
  initialState,
);

console.log(commonreducer(initialState, loadApp('junk token')));

export default commonreducer;
