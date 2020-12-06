import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const BASIC_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // AUTH
  logIn(email: string, password: string) {
    return this.http.post(`${BASIC_URL}/auth/login`, { email, password }, { withCredentials: true });
  }

  registerNewUser(email: string, password: string) {
    return this.http.post(`${BASIC_URL}/auth/register`, { email, password });
  }

  // ARTICLES
  getAllArticles() {
    return this.http.get(`${BASIC_URL}/articles`);
  }

  getArticleById(id: string) {
    return this.http.get(`${BASIC_URL}/articles/${id}`);
  }

  getArticlesByUser() {
    return this.http.get(`${BASIC_URL}/articles/user`, { withCredentials: true });
  }

  addArticle(createArticleDTO: any) {
    return this.http.post(`${BASIC_URL}/articles`, createArticleDTO, { withCredentials: true });
  }

  editArticle(editArticleDTO: any, id: string) {
    return this.http.patch(`${BASIC_URL}/articles/${id}`, editArticleDTO, { withCredentials: true });
  }

  deleteArticle(articleId: string) {
    return this.http.delete(`${BASIC_URL}/articles/${articleId}`, { withCredentials: true });
  }

  // COMMENTS
  addComment(articleId: string, text: string) {
    return this.http.post(`${BASIC_URL}/comments/${articleId}`, { text }, { withCredentials: true });
  }
}
