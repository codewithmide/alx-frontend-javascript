import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqdt, floors) {
    super(sqdt);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    // Return a string with the message to evacuate the building (number of floors)
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Getters for the attributes of the class
  get sqft() { // Getter for sqft attribute (number)
    return this._sqft;
  }

  get floors() { // Getter for floors attribute (number)
    return this._floors;
  }
}
