import { loadTags, applyTagFilter } from './tags';

// reducers
export { default as tags } from './tags';
export { default as article } from './article';
export { default as articles } from './articleList';

// actions
export const actions = {
  loadTags,
  applyTagFilter,
};
