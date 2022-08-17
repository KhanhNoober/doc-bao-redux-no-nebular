import { createReducer, on } from '@ngrx/store';
import { ArticlesState } from 'src/app/states/article.state';
import * as ArticleActions from 'src/app/actions/article.action';

const initialState: ArticlesState = {
  articles: [],
  inLoading: false,
  error: '',
};

export const articlesReducer = createReducer(
  initialState,
  on(ArticleActions.getArticles, (state) => {
    return {
      ...state,
      inLoading: true,
    };
  }),
  on(ArticleActions.getArticlesSuccess, (state, action) => {
    return {
      ...state,
      articles: action.articles,
      inLoading: false,
    };
  }),
  on(ArticleActions.getArticlesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      inLoading: false,
    };
  })
);
