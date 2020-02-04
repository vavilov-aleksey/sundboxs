// Валидация email
const inputEmail = document.querySelector('input');
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (inputEmail.value.match(validEmail)) {
  // email валидный
}
