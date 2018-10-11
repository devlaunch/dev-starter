import { createAction, handleActions, combineActions } from "redux-actions";
import agent from "../utils/agent";

// Actions
export const saveSettings = createAction("SETTINGS_SAVE", async user => {
  const response = await agent.Auth.save(user);
  return response;
});
export const unloadSettings = createAction("SETTINGS_UNLOAD");

const initialState = {};

// Reducers
export default handleActions(
  {
    [combineActions("SETTINGS_SAVE_FULFILLED", "SETTINGS_SAVE_REJECTED")]: (
      state,
      action
    ) => ({
      ...state,
      inProgress: false,
      errors: action.error ? action.payload.errors : null
    }),
    SETTINGS_SAVE_PENDING: state => ({
      ...state,
      inProgress: true,
      errors: null
    }),
    SETTINGS_UNLOAD: () => ({})
  },
  initialState
);
