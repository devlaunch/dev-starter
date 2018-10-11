import { createAction, handleActions, combineActions } from "redux-actions";
import agent from "../utils/agent";

// Actions
export const login = createAction("LOGIN", (email, password) =>
  agent.Auth.login(email, password)
);
export const register = createAction("REGISTER");
export const unloadLoginPage = createAction("LOGIN_PAGE_UNLOAD");
export const unloadRegisterPage = createAction("REGISTER_PAGE_UNLOAD");
export const logout = createAction("LOGOUT");
export const updateAuthField = createAction(
  "AUTH_FIELD_UPDATE",
  (key, value) => ({
    key,
    value
  })
);

const initialState = {};

// Reducers
export default handleActions(
  {
    [combineActions("LOGIN", "REGISTER")]: (state, action) => ({
      ...state,
      inProgress: false,
      errors: action.error ? action.payload.errors : null
    }),
    [combineActions("LOGIN_PAGE_UNLOAD", "REGISTER_PAGE_UNLOAD")]: () => ({}),
    LOGOUT: state => ({
      ...state,
      redirectTo: "/",
      token: null,
      currentUser: null
    }),
    AUTH_FIELD_UPDATE: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value
    })
  },
  initialState
);
