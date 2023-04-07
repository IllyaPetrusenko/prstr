// Get the form element and add an event listener for form submission
const form = document.querySelector('#my-form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the default form submission

  // Get the form data and convert it to a JSON string
  const phoneInput = document.querySelector('#phone-input');
  const phoneNumber = phoneInput.value;
  const nameInput = document.querySelector('#name-input');
  const nameContact = nameInput.value;
  const textInput = document.querySelector('#text-input');
  const text = textInput.value;
  const formData = new FormData(form);
  const data = {"name": nameContact, "phone": phoneNumber, "comment": text};
  const json = JSON.stringify(data);
  const modal = document.querySelector('#callback-form');

  // Проверка обязательных полей
  if (!nameContact || !phoneNumber) {
    alert('Необхідно заповнити обовʼязкові поля "Імʼя" та "Телефон"');
    return;
  }

  // Валидация номера телефона
  const phoneRegex = /^(\+38|38|8)?\d{3}\d{3}\d{2}\d{2}$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert('Введіть коректний номер телефону');
    return;
  }

  // Send the data to the endpoint using Fetch API
  fetch('/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
  .then(data => {
    modal.style.display = 'none';
  })
  .then(data => {
    alert('Дякуємо за звернення, скоро ми Вам передзвонимо!');
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
