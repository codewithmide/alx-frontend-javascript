export default class Currency {
  constructor(code, name) {
    // Verify attribute types during obj creation
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a string');
    if (Object.getPrototypeOf(code) !== String.prototype) throw TypeError('code must be a string');

    // Create objs
    this._name = name;
    this._code = code;
  }

  // Setters
  set name(value) { // Setter for name attribute (string)
    if (Object.getPrototypeOf(value) !== String.prototype) throw TypeError('name must be a string');
    this._name = value;
  }

  set code(value) { // Setter for length attribute (number)
    if (Object.getPrototypeOf(value) !== Number.prototype) throw TypeError('length must be a number');
    this._code = this.code;
  }

  // Getters

  get name() { // Getter for name attribute (string)
    return this._name;
  }

  get code() { // Getter for length attribute (number)
    return this._code;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
