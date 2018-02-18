import { combineReducers } from 'redux';

import articles from 'modules/articles';
import auth from 'modules/auth';
import common from 'modules/common';
import editor from 'modules/editor';
import home from 'modules/home';
import profile from 'modules/profile';
import settings from 'modules/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer,
});
