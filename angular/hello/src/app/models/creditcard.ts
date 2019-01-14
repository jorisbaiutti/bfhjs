export class CreditCard{
  public type: CreditCardType;
  public number: number;
  public expirationDate: Date;
  constructor(){}
}

export enum CreditCardType{
  VISA,
  MASTERCARD,
  AMERICANEXPRESS
}
