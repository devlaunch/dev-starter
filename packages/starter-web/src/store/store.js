import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import { localStorageMiddleware } from './middleware';
import reducer from './reducer';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      appRouterMiddleware,
      promiseMiddleware,
      // localStorageMiddleware
    );
  }
  // Enable additional logging in non-production environments.
  return applyMiddleware(
    appRouterMiddleware,
    // promiseMiddleware,
    // localStorageMiddleware,
    createLogger(),
  );
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
