import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getArticles(page: number, perPage: number) {
    let articles = this.httpClient.get<any>(
      `https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`
    );
    return articles;
  }
}
