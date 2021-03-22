// add events
document.getElementById('input-alert').addEventListener('blur', validateEmail);

// create alarm text
const text = 'Please put a valid Email';

const textFields = 'Please fill the the Email input';

// change the alert text color
document.getElementById('alert-invalid').style.color = 'red';

// create function to validate email
function validateEmail() {
  const email = document.getElementById('input-alert');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    document.getElementById('alert-invalid').textContent = text;
    return false;
  } else {
    document.getElementById('alert-invalid').textContent = '';
  }
}
