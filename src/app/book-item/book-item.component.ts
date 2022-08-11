import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  // PRESENTATIONAL  
  @Input() book: { title: string; description: string; } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
