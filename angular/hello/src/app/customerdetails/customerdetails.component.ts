import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CreditCardType } from '../models/creditcard';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  public customer: Customer = new Customer();
  public creditCardTypes: string[] = Object.keys(CreditCardType);
  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  public saveCustomer(): void {
    this.orderService.customer = this.customer;
  }
}
