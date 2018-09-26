import { Book } from './book/book';
import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://my-json-server.typicode.com/sanadsa/test-json/books';
  constructor(private http: Http) { }

  getBooks() {
    return this.http.get(this.url);
  }

  postBook(book) {
    return this.http.post(this.url, JSON.stringify(book));
  }

  deleteBook(id) {
    return this.http.delete(this.url + '/' + id);
  }

  updatePost(book: Book) {
    return this.http.put(this.url + '/' + book.id, JSON.stringify(book));
  }
}
