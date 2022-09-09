// This is for local storage
const contactForm = document.querySelector('#contactF');
const client = {
  names: '',
  email: '',
  message: '',
};

contactForm.addEventListener('change', () => {
  client.names = document.querySelector('#names').value;
  client.email = document.querySelector('#email').value;
  client.message = document.querySelector('#message').value;

  localStorage.setItem('content', JSON.stringify(client));
});
const dataOBJ = JSON.parse(localStorage.getItem('content'));
if (dataOBJ) {
  document.querySelector('#names').value = dataOBJ.names;
  document.querySelector('#email').value = dataOBJ.email;
  document.querySelector('#message').value = dataOBJ.message;
}
document.getElementById('email').addEventListener('input', () => {
  function clear() {
  document.querySelector('.error').innerHTML = "";
  document.getElementById('email').style.color = '#111'
  document.getElementById('email').style.borderBlockColor = '#d0d9d4'
}
clear();
});
