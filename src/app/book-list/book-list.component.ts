import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  //Smart DI dep inj communicate with APIs
  books: any[] = [];
  headers = ["Title", "Description"];
  keys =["title", "description"]
  
  constructor(private bookService: BookService) {
    //  array of books
     this.books = this.bookService.getBooks() as any;
  
   }

  ngOnInit(): void {
  }

}
