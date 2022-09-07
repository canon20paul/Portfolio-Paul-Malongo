// This is for local storage
const userContent = {
    names: '',
    email: '',
    message: '',
};

form.addEventListener('keydown', () => {
    userContent.names = document.querySelector('#names').value;
    userContent.email = document.querySelector('#email').value;
    userContent.textArea = document.querySelector('#message').value;

    localStorage.setItem('stored', JSON.stringify(userContent));
});
const storedObject = JSON.parse(localStorage.getItem('stored'));
if (storedObject) {
    document.querySelector('#names').value = storedObject.names;
    document.querySelector('#email').value = storedObject.email;
    document.querySelector('#message').value = storedObject.message;
}