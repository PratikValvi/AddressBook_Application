class Person {

  get id() { return this._id; }
  set id(id) {
    this.id = id;
  }

  get name() { return this._name; }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(name))
      this._name = name;
    else throw 'Name is incorrect!';
  }

  get address() { return this._address; }
  set address(address) {
    this._address = address;
  }

  toString() {
    return "Name= " + this.name + 
    "Address= " + this.address +
    "City= " + this.city +
    "State= " + this.state +
    "Phone Number= " + this.phoneNumber;
  }
}