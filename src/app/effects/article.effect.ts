import { Injectable } from '@angular/core';
import * as articlesActions from '../actions/article.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(articlesActions.getArticles),
      switchMap((action) =>
        this.articleService.getArticles(action.page, action.perPage)
      ),
      map((articles) => articlesActions.getArticlesSuccess({ articles })),
      catchError((error) => of(articlesActions.getArticlesFailure({ error })))
    )
  );
}
