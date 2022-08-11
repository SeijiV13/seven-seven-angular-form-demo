import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
     {
      title: "Test 1",
      description: "Test Desc"
     },
     {
      title: "Test 2",
      description: "Test Desc"
     }

  ]

  constructor() { }

  getBooks() {
    return this.books;
  }
}
