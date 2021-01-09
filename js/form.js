
window.addEventListener('DOMContentLoaded',(event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');

  name.addEventListener('input', function() {
    if(name.value.length == 0) {
        textError.textContent = "";
        return;
    }
    try {
        (new Person()).name = name.value;;
        textError.textContent = "";
    } catch (e) {
        textError.textContent = e;
    }
  });

  const phoneNumber = document.querySelector('#number');
  const numberError = document.querySelector('.number-error');

  phoneNumber.addEventListener('input', function() {
    if(phoneNumber.value.length == 0) {
        numberError.textContent = "";
        return;
    }
    try {
        (new Person()).phoneNumber = phoneNumber.value;;
        numberError.textContent = "";
    } catch (e) {
        numberError.textContent = e;
    }
  });
});

const save = () => {
  try {
      let personData = createAddressBookEntry();
      createAndUpdateStorage(personData);
  } catch (e) {
      return;
  }
}

const createAddressBookEntry = () => {
  let personData = new Person();
  
  let name = getInputValueById('#name');
  let address = getInputValueById('#address');
  let city = getInputValueById('#city');
  let state = getInputValueById('#state');
  let zipCode = getInputValueById('#zipcode');
  let phoneNumber = getInputValueById('#number');

  try {
    personData.name = name;
  } catch (e) {
    setTextValue('.text-error',e);
    throw e;
  }

  personData.address = address;
  personData.city = city;
  personData.state = state;
  personData.zipCode = zipCode;

  try {
    personData.phoneNumber = phoneNumber;
  } catch (e) {
    setTextValue('.number-error',e);
    throw e;
  }
  alert(personData.toString());
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}
