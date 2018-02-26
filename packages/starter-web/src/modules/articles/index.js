import { loadTags, applyTagFilter } from './tags';
import { loadArticlePage, unloadArticlePage, addComment, deleteComment } from './article';

// reducers
export { default as tags } from './tags';
export { default as article } from './article';
export { default as articles } from './articleList';

// actions
export const actions = {
  loadTags,
  applyTagFilter,
  loadArticlePage,
  unloadArticlePage,
  addComment,
  deleteComment,
};
