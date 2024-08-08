export default class Airport {
  /**
   * Creates an instance of Airport.
   *
   * @param {String} name - The name of the airport.
   * @param {String} code - The airport code.
   */

  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
