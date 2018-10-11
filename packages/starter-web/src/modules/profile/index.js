import { createAction, handleActions, combineActions } from "redux-actions";
import agent from "../utils/agent";

// Actions
export const followUser = createAction("FOLLOW_USER", async username => {
  const response = await agent.Profile.follow(username);
  return response;
});
export const unfollowUser = createAction("UNFOLLOW_USER", async username => {
  const response = await agent.Profile.unfollow(username);
  return response;
});
export const unloadProfilePage = createAction("PROFILE_PAGE_UNLOAD");
export const loadProfilePage = createAction(
  "PROFILE_PAGE_LOAD",
  async username => {
    const response = await Promise.all([
      agent.Profile.get(username),
      agent.Articles.byAuthor(username)
    ]);
    return response;
  }
);

const initialState = {};

// Reducers
export default handleActions(
  {
    [combineActions("FOLLOW_USER_FULFILLED", "UNFOLLOW_USER_FULFILLED")]: (
      state,
      action
    ) => ({
      ...action.payload.profile
    }),
    PROFILE_PAGE_UNLOAD: () => ({}),
    PROFILE_PAGE_LOAD_FULFILLED: (state, action) => ({
      ...action.payload[0].profile
    })
  },
  initialState
);
