// Import the class Car from 10-car.js
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the superclass
    super(brand, motor, color);
    // Create objs
    this._range = range;
  }

  // Static method to get the constructor of the superclass (Car)
  static get [Symbol.species]() {
    return Car;
  }
}
