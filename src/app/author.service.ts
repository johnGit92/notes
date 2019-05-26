import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './model/author';

@Injectable()
export class AuthorService {
  baseUrl = 'http://localhost:8080/authorapi';

  constructor(private http: HttpClient) { }

  getAuthorById(id: number) {
    return this.http.get<Author>(this.baseUrl + '/authors/' + id);
  }
}
