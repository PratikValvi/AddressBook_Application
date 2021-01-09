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

  get phoneNumber() { return this._phoneNumber; } 
  set phoneNumber(phoneNumber) { 
    let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$'); 
    if(phoneNumberRegex.test(phoneNumber)) 
      this._phoneNumber = this.phoneNumber; 
    else throw 'Phone Number is Incorrect !'; 
  }

  toString() {
    return "Name= " + this.name + 
    "Address= " + this.address +
    "City= " + this.city +
    "State= " + this.state +
    "Phone Number= " + this.phoneNumber;
  }
}