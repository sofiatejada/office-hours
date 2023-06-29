var submitButton = document.querySelector('#submit');
var languages = document.querySelector('#languages');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var password = document.querySelector('#password');
var date = document.querySelector('#date');
var faveNum = document.querySelector('#favorite-number');
var textArea = document.querySelector('#textarea');
var faveColor = document.querySelector('#favorite-color');
var main = document.querySelector('main');
var h1 = document.createElement('h1');
var p = document.querySelector('p');

main.appendChild(h1);

var myObj = {
    name: '',
    email: '',
    password: '',
    date: '',
    faveNum: '',
    message: '',
    faveColor: '',
};

submitButton.addEventListener('click', (e) => {
    myObj.name = nameInput.value;
    myObj.email = emailInput.value;
    console.log(emailInput);
    myObj.message = textArea.value;
    myObj.paragraph = p.textContent;
    h1.textContent = `Hi, ${myObj.name}. And my email is ${myObj.email}`;
    console.log(myObj);
});
