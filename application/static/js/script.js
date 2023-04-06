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
  console.log(json);

  // Send the data to the endpoint using Fetch API
  fetch('/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    modal.style.display = 'none';
    alert('Дякуємо за звернення, скоро ми Вам передзвонимо!');
    // Do something with the response data
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
