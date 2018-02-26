import { article, actions as articleactions } from 'modules/articles';

describe('loadArticlePageAction', () => {
  it('should create an action to load articles from backend', () => {
    const expectedAction = {
      type: 'ARTICLE_PAGE_LOAD',
    };
    expect(articleactions.loadArticlePage()).toEqual(expectedAction);
  });
});

describe('loadArticleReducer', () => {
  it('should return the initial state', () => {
    const state = undefined;
    const action = {};
    expect(article(state, action)).toEqual({ article: null, comments: null });
  });
  it('should handle ARTICLE_PAGE_LOAD action', () => {
    const state = { article: null, comments: null };
    const action = articleactions.loadArticlePage();
    expect(article(state, action)).toEqual({ article: null, comments: null });
  });
});

describe('unloadArticlePageAction', () => {
  it('should create an action to unload articles from state on page close', () => {
    const expectedAction = {
      type: 'ARTICLE_PAGE_UNLOAD',
    };
    expect(articleactions.unloadArticlePage()).toEqual(expectedAction);
  });
});

describe('addCommentAction', () => {
  it('should create an action to add comment to backend', () => {
    const expectedAction = {
      type: 'COMMENT_ADD',
    };
    expect(articleactions.addComment()).toEqual(expectedAction);
  });
});

describe('deleteCommentAction', () => {
  it('should create an action to remove comment from backend', () => {
    const expectedAction = {
      type: 'COMMENT_DELETE',
    };
    expect(articleactions.deleteComment()).toEqual(expectedAction);
  });
});
