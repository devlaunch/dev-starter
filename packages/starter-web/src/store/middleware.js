import { login, logout, register } from "modules/auth";
import agent from "modules/utils/agent";

const localStorageMiddleware = store => next => action => {
  if (action.type === register.type || action.type === login.type) {
    if (!action.error) {
      window.localStorage.setItem("jwt", action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === logout.type) {
    window.localStorage.setItem("jwt", "");
    agent.setToken(null);
  }

  next(action);
};

export default { localStorageMiddleware };
