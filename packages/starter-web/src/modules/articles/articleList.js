import { createAction, handleActions, combineActions } from 'redux-actions';
import agent from '../utils/agent';

// Actions
export const loadArticleList = createAction('ARTICLE_LIST_LOAD');
export const favoritedArticle = createAction('ARTICLE_FAVORITED');
export const unfavoritedArticle = createAction('ARTICLE_UNFAVORITED');
export const setArticlePager = createAction('ARTICLE_PAGER_SET');

const initialState = {
  articles: null,
  articlesCount: 0,
  type: null,
  currentPage: 0,
  pager: null,
};
// Reducers
export default handleActions(
  {
    [combineActions(favoritedArticle, unfavoritedArticle)]: (state, action) => ({
      ...state,
      articles: state.articles.map((article) => {
        if (article.slug === action.payload.article.slug) {
          return {
            ...article,
            favorited: action.payload.article.favorited,
            favoritesCount: action.payload.article.favoritesCount,
          };
        }
        return article;
      }),
    }),
    [loadArticleList]: (state, action) => ({
      ...state,
      pager: action.pager,
      articles: action.payload.articles,
      articlesCount: action.payload.articlesCount,
      currentPage: 0,
      type: action.type,
    }),
    [setArticlePager]: (state, action) => ({
      ...state,
      articles: action.payload.articles,
      articlesCount: action.payload.articlesCount,
      currentPage: action.page,
    }),
  },
  initialState,
);
