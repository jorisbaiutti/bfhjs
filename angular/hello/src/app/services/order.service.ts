import { Injectable } from '@angular/core';
import { Book } from '../models/bookmodel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  public book: Book;
  public customer: Customer;

}
