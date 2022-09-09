document.getElementById('contactF').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.error').innerHTML = 'Your email address should be in lowercase';
    document.querySelector('.error').style.color = 'red';
    document.getElementById('email').style.color = 'red';
    document.getElementById('email').style.borderBlockColor = 'red';
  }
});