import { createAction, handleActions } from 'redux-actions';

// Actions
export const loadApp = createAction('APP_LOAD', () => {});
export const redirect = createAction('REDIRECT');

const initialState = {
  appName: 'Conduit',
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
  },
  initialState,
);
