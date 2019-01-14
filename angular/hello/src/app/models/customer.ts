import { CreditCard } from './creditcard';

export class Customer {
  public firstname: string;
  public lastname: string;
  public email: string;
  public creditCard: CreditCard =  new CreditCard();
  constructor() {}
}
