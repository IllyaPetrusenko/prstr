const form = document.querySelector('#callback-form');
const endpoint = 'https://example.com/api/call';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const phoneInput = document.querySelector('#phone-input');
  const phoneRegex = /^\+380\d{9}$/;
  const nameInput = document.querySelector('#name-input');
  const phoneError = document.querySelector('#phone-error');

  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.style.display = 'block';
    return;
  }

  phoneError.style.display = 'none';

  const data = {
    name: nameInput.value,
    phone: phoneInput.value
  };

  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
});