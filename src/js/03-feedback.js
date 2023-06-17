import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// let obj = {};
const onForm = event => {
  //   obj[event.target.name] = event.target.value;
  //   localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', throttle(onForm, 500));

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

const onSubmit = event => {
  event.preventDefault();
  //   localStorage.clear();
  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', onSubmit);
