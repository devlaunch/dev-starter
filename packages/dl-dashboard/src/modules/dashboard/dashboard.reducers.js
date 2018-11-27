import { getDefaultPath } from "helpers/urlSync";

function getView(width) {
  let newView = "MobileView";
  if (width > 1220) {
    newView = "DesktopView";
  } else if (width > 767) {
    newView = "TabView";
  }
  return newView;
}

export const ACTION_TYPES = {
  COLLPSE_CHANGE: "dashboard/COLLPSE_CHANGE",
  COLLPSE_OPEN_DRAWER: "dashboard/COLLPSE_OPEN_DRAWER",
  CHANGE_OPEN_KEYS: "dashboard/CHANGE_OPEN_KEYS",
  TOGGLE_ALL: "dashboard/TOGGLE_ALL",
  CHANGE_CURRENT: "dashboard/CHANGE_CURRENT",
  CLOSE_ALL: "dashboard/CLOSE_ALL"
};

const preKeys = getDefaultPath();

const initState = {
  collapsed: window.innerWidth > 1220 ? false : true,
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPES.COLLPSE_CHANGE:
      return { ...state, collapsed: !state.collapsed };
    case ACTION_TYPES.COLLPSE_OPEN_DRAWER:
      return { ...state, openDrawer: !state.openDrawer };
    case ACTION_TYPES.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height: height
        };
      }
      break;
    case ACTION_TYPES.CHANGE_OPEN_KEYS:
      return { ...state, openKeys: action.openKeys };
    case ACTION_TYPES.CHANGE_CURRENT:
      return { ...state, current: action.current };
    case ACTION_TYPES.CLOSE_ALL:
      return { ...state, current: [], openKeys: [] };
    default:
      return state;
  }
  return state;
}

export const toggleCollapsed = () => ({
  type: ACTION_TYPES.COLLPSE_CHANGE
});

export const toggleAll = (width, height) => {
  const view = getView(width);
  const collapsed = view !== "DesktopView";
  return {
    type: ACTION_TYPES.TOGGLE_ALL,
    collapsed,
    view,
    height
  };
};

export const toggleOpenDrawer = () => ({
  type: ACTION_TYPES.COLLPSE_OPEN_DRAWER
});

export const changeOpenKeys = openKeys => ({
  type: ACTION_TYPES.CHANGE_OPEN_KEYS,
  openKeys
});

export const changeCurrent = current => ({
  type: ACTION_TYPES.CHANGE_CURRENT,
  current
});

export const closeAll = () => ({ type: ACTION_TYPES.CLOSE_ALL });
