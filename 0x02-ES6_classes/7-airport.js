// Airport Class
/**
 * Build initial class
 * @class Airport
 */

export default class Airport {
  constructor(name, code) {
    // Create objs
    this._code = code;
    this._name = name;
  }

  // Method

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // Setters for code and name attributes for the class
  set code(newCode) { // Setter for code attribute (string)
    this._code = newCode;
  }

  set name(newName) { // Setter for name attribute (string)
    this._name = newName;
  }

  // Getters for code and name attributes for the class
  get code() { // Getter for code attribute (string)
    return this._code;
  }

  get name() { // Getter for name attribute (string)
    return this._name;
  }
}
