const StorageKey = 'feedback-form-state';
const formData = { email: '', message: '' };
console.log(formData);

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(StorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
}
form.addEventListener('input', handlerFormInput);

function handlerFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(StorageKey, JSON.stringify(formData));
}

populateForm();

function populateForm() {
  const savedData = localStorage.getItem(StorageKey);
  if (!savedData) {
    return;
  }
  const parsedData = JSON.parse(savedData);
  console.log(parsedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  if (formData.email) {
    form.elements.email.value = formData.email;
  }
  if (formData.message) {
    form.elements.message.value = formData.message;
  }
}
