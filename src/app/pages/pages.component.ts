import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as articlesActions from '../actions/article.action';
import { ArticlesState } from '../states/article.state';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  articles$: any = this.store.select('articles', 'articles');

  constructor(private store: Store<{ articles: ArticlesState }>) {}
  ngOnInit(): void {
    this.store.dispatch(articlesActions.getArticles({ page: 1, perPage: 10 }));
  }

  gotoArticle(link: string) {
    window.open(link, '_blank');
  }
}
