import { createAction, props } from '@ngrx/store';

export const getArticles = createAction(
  '[Article] Get Articles',
  props<{ page: number; perPage: number }>()
);

export const getArticlesSuccess = createAction(
  '[Article] Get Articles Success',
  props<{ articles: any }>()
);

export const getArticlesFailure = createAction(
  '[Article] Get Articles Failure',
  props<{ error: string }>()
);
