import { createAction, handleActions, combineActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const unloadHomePage = createAction('HOME_PAGE_UNLOAD');
export const loadHomePage = createAction('HOME_PAGE_LOAD', (token) => {
  const articlesPromise = token ? agent.Articles.feed : agent.Articles.all;
  return Promise.all([agent.Tags.getAll(), articlesPromise()]);
});

const initialState = {};

// Reducers
export default handleActions(
  {
    [combineActions('SETTINGS_SAVE_FULFILLED', 'SETTINGS_SAVE_REJECTED')]: (state, action) => ({
      ...state,
      inProgress: false,
      errors: action.error ? action.payload.errors : null,
    }),
    SETTINGS_SAVE_PENDING: state => ({
      ...state,
      inProgress: true,
      errors: null,
    }),
    HOME_PAGE_UNLOAD: () => ({}),
  },
  initialState,
);
