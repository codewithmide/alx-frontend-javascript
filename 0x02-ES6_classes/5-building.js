/**
 *  Abstract Building class
 * @class Building
 */

export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    // Create objs
    this._sqft = sqft;
  }

  // Getter for sqft attribute for the class Building
  get sqft() { // Getter for sqft attribute (string)
    return this._sqft;
  }
}
