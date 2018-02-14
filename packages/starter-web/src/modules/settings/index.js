import { createAction, handleActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const saveSettings = createAction('SETTINGS_SAVE', user => agent.Auth.save(user));
export const unloadSettings = createAction('SETTINGS_UNLOAD');
export const ASYNC_START = createAction('ASYNC_START');

const initialState = {};

// Reducers
export default handleActions(
  {
    SETTINGS_SAVE: (state, action) => ({
      ...state,
      inProgress: false,
      errors: action.error ? action.payload.errors : null,
    }),
    SETTINGS_UNLOAD: () => ({}),
    ASYNC_START: state => ({
      ...state,
      inProgress: true,
    }),
  },
  initialState,
);
