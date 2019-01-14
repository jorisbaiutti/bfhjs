import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/bookmodel';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  @Input()
  public book: Book;

  @Output()
  public back = new EventEmitter();

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
  }

  public orderBook(): void{
    this.orderService.book = this.book;
    this.router.navigateByUrl('/customerdetails');
  }
}
