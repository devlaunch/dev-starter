import { createAction, handleActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const loadTags = createAction('TAGS_LOAD', () => {
  agent.Tags.getAll();
});
export const applyTagFilter = createAction('TAG_FILTER', (tag) => {
  agent.Articles.byTag(tag);
});

const initialState = {};

// Reducers
export default handleActions(
  {
    [applyTagFilter]: (state, action) => ({
      ...state,
      articles: action.payload.articles,
      articlesCount: action.payload.articlesCount,
      tag: action.payload.tag,
    }),
    [loadTags]: (state, action) => ({
      ...state,
      tags: action.payload.tags,
    }),
  },
  initialState,
);
