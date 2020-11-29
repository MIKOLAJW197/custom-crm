import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const BASIC_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // AUTH
  logIn(email: string, password: string) {
    return this.http.post(`${BASIC_URL}/login`, { email, password });
  }

  registerNewUser(email: string, password: string) {
    return this.http.post(`${BASIC_URL}/register`, { email, password });
  }

  // ARTICLES
  getAllArticles() {
    return this.http.get(`${BASIC_URL}/articles`);
  }

  getArticleById(id: string) {
    return this.http.get(`${BASIC_URL}/articles/${id}`);
  }

  // COMMENTS
  addComment(articleId: string, text: string) {
    return this.http.post(`${BASIC_URL}/comments/${articleId}`, { text });
  }
}
