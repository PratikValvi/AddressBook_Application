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