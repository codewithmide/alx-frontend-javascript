// Import Currency class from 3-currency.js
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Create objs
    this._amount = amount;
    this._currency = currency;
  }

  // Methods

  displayFullPrice() { // Display the class instance (string) with amount and currency
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) { // Static method to convert price
    return amount * conversionRate; // Convert price using conversion rate (number)
  }

  // Setters for amount and currency attributes for the class
  set amount(newAmount) { // Setter for amount attribute (number)
    this._amount = newAmount;
  }

  set currency(newCurrency) { // Setter for currency attribute (Currency class)
    if (!(newCurrency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = newCurrency;
  }

  // Getters for amount and currency attributes for the class
  get amount() { // Getter for amount attribute (string)
    return this._amount;
  }

  get currency() { // Getter for currency attribute (Currency class)
    return this._currency;
  }
}
