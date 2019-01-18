import { getDefaultPath } from 'helpers/urlSync';

// Private function to get view type based on the width
// Used in window resize action to colapse sidebar
function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}

export const ACTION_TYPES = {
  COLLPSE_CHANGE: 'dashboard/COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'dashboard/COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'dashboard/CHANGE_OPEN_KEYS',
  WINDOW_RESIZE: 'dashboard/WINDOW_RESIZE',
  CHANGE_CURRENT: 'dashboard/CHANGE_CURRENT',
  CLOSE_ALL: 'dashboard/CLOSE_ALL',
};

const preKeys = getDefaultPath();

const initState = {
  collapsed: !(window.innerWidth > 1220),
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys,
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPES.COLLPSE_CHANGE:
      return { ...state, collapsed: !state.collapsed };
    case ACTION_TYPES.COLLPSE_OPEN_DRAWER:
      return { ...state, openDrawer: !state.openDrawer };
    case ACTION_TYPES.WINDOW_RESIZE:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height,
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
  type: ACTION_TYPES.COLLPSE_CHANGE,
});

// Action to collapse or show sidebar on window resize
export const resizeWindow = (width, height) => {
  const view = getView(width);
  const collapsed = view !== 'DesktopView';
  return {
    type: ACTION_TYPES.WINDOW_RESIZE,
    collapsed,
    view,
    height,
  };
};

export const toggleOpenDrawer = () => ({
  type: ACTION_TYPES.COLLPSE_OPEN_DRAWER,
});

export const changeOpenKeys = openKeys => ({
  type: ACTION_TYPES.CHANGE_OPEN_KEYS,
  openKeys,
});

export const changeCurrent = current => ({
  type: ACTION_TYPES.CHANGE_CURRENT,
  current,
});

export const closeAll = () => ({ type: ACTION_TYPES.CLOSE_ALL });
