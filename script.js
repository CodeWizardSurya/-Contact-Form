const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMsg = document.querySelector('.success-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearErrors();
  successMsg.textContent = '';

  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name cannot be empty');
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email cannot be empty');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email');
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message cannot be empty');
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
  }
});

function showError(inputElement, message) {
  const formGroup = inputElement.parentElement;
  const errorMsg = formGroup.querySelector('.error-msg');
  errorMsg.textContent = message;
  inputElement.style.borderColor = '#cc0000';
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-msg');
  errorMessages.forEach(msg => (msg.textContent = ''));

  const inputs = [nameInput, emailInput, messageInput];
  inputs.forEach(input => (input.style.borderColor = '#007acc'));
}

function isValidEmail(email) {
  // Simple regex for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
