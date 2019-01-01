import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import DevTools from "components/utility/devtools";
import errorMiddleware from "redux/middlewares/error-middleware";
import notificationMiddleware from "redux/middlewares/notification-middleware";
import loggerMiddleware from "redux/middlewares/logger-middleware";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import reducers from "redux/reducers";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [
  thunkMiddleware,
  errorMiddleware,
  notificationMiddleware,
  promiseMiddleware(),
  loadingBarMiddleware(),
  loggerMiddleware,
  routeMiddleware
];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        DevTools.instrument()
      )
    : compose(applyMiddleware(...middlewares))
);
export { store, history };
