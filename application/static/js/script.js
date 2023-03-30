// Получение элементов страницы
const modal = document.querySelector('.modal');
const modalButton = document.querySelectorAll('.modal-button');
const close = document.querySelector('.close');
const form = document.querySelector('.form');
const phoneInput = document.querySelector('#phone');

// Открытие модального окна по клику на кнопку
modalButton.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Закрытие модального окна по клику на крестик или вне модального окна
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Проверка телефона при отправке формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отмена действия по умолчанию (отправка формы)

  const phone = phoneInput.value;

  // Регулярное выражение для проверки телефона
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  if (!phoneRegex.test(phone)) {
    alert('Некорректный номер телефона!');
    return;
  }

  // Отправка формы
  form.submit();
});
