const formData = {
  email: '',
  message: '',
};

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const storage = localStorage.getItem(FEEDBACK_FORM_STATE);

if (storage) {
  const { email, message } = JSON.parse(storage);
  formData.email = email;
  formData.message = message;
  feedbackForm.querySelector('[name="email"]').value = email;
  feedbackForm.querySelector('[name="message"]').value = message;
}

const saveFieldToLacalStorage = event => {
  const field = event.target;
  const fieldName = field.getAttribute('name');
  formData[fieldName] = field.value.trim();
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
};

const onSubmitFeedbackForm = event => {
  event.preventDefault();
  const formEls = event.currentTarget.elements;

  if (!formEls.email.value || !formEls.message.value) {
    alert('Fill all fields, please');
    return;
  }
  console.log(formData);
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  formData.email = '';
  formData.message = '';
  event.currentTarget.reset();
};

feedbackForm.addEventListener('input', saveFieldToLacalStorage);
feedbackForm.addEventListener('submit', onSubmitFeedbackForm);
