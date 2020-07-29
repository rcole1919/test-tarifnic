'use strict';

(function () {
  const PHONE_RE = /^[0-9]{11}$/;

  let form = document.querySelector('.request__form');
  let phoneInput = document.querySelector('#phone');
  let nameInput = document.querySelector('#name');
  let addressInput = document.querySelector('#address');
  let inputs = document.querySelectorAll('.request__personal-input');

  phoneInput.addEventListener('input', function () {
    if (!PHONE_RE.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Номер телефона указан неверно');
    } else {
      phoneInput.setCustomValidity('');
    }
  });
  
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let formData  = {
      phone: phoneInput.value,
      name: nameInput.value,
      address: addressInput.value
    };

    // window.backend.save(formData);

    window.backend.saveThroughAjax(formData);

    inputs.forEach(function (el) {
      el.value = '';
    });
  });
})();
