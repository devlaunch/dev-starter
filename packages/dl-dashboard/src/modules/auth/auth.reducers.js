import { REQUEST, SUCCESS, FAILURE } from "redux/utils/action-type-utils";

export const ACTION_TYPES = {
  CHECK_AUTHORIZATION: "auth/CHECK_AUTHORIZATION",
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT"
};

const initState = { idToken: null };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case SUCCESS(ACTION_TYPES.LOGIN):
      return { ...state, idToken: action.token };
    case ACTION_TYPES.LOGOUT:
      return initState;
    default:
      return state;
  }
}

export const checkAuthorization = () => ({ type: actions.CHECK_AUTHORIZATION });

export const login = () => ({
  type: REQUEST(ACTION_TYPES.LOGIN)
});

export const logout = () => ({
  type: ACTION_TYPES.LOGOUT
});
