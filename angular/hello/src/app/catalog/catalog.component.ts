import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../services/bookdata.service';
import { Book } from '../models/bookmodel';

@Component({
  selector: 'book-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public books: Promise<Book[]>;
  public keyWords: string;
  public selectedBook: Book;
  public searchResults: Book[];
  constructor(private bookDataService: BookdataService) {
    this.books = bookDataService.getBooks();
  }

  ngOnInit() {}

  public selectBook(book: Book): void {
    this.selectedBook = book;
  }

  public async searchBooks(){
    this.searchResults = await this.bookDataService.searchBooks(this.keyWords);
  }
}
