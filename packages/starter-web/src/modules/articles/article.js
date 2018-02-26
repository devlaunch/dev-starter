import { createAction, handleActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const loadArticlePage = createAction('ARTICLE_PAGE_LOAD', (id) => {
  agent.Articles.get(id);
});
export const unloadArticlePage = createAction('ARTICLE_PAGE_UNLOAD');
export const addComment = createAction('COMMENT_ADD');
export const deleteComment = createAction('COMMENT_DELETE');

const initialState = {
  article: null,
  comments: null,
};

// Reducers
export default handleActions(
  {
    [loadArticlePage]: (state, action) => ({
      ...state,
      article: action.payload.article,
      comments: action.payload.comments,
    }),
    [unloadArticlePage]: (state, action) => ({}),
    [addComment]: (state, action) => ({
      ...state,
      commentErrors: action.error ? action.payload.errors : null,
      comments: action.error ? null : (state.comments || []).concat([action.payload.comment]),
    }),
    [deleteComment]: (state, action) => ({
      ...state,
      comments: state.comments.filter(comment => comment.id !== commentId),
    }),
  },
  initialState,
);
