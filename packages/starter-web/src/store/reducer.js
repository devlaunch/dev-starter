import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { articles, tags, article } from "modules/articles";
import auth from "modules/auth";
import common from "modules/common";
import editor from "modules/editor";
import home from "modules/home";
import profile from "modules/profile";
import settings from "modules/settings";

export default combineReducers({
  article,
  articles,
  tags,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
