const form = document.querySelector('#form');
let username = 0;
let email = 0;
let password = 0;

function passwordConfirmation () {
   username = form.elements['username'];
   email = form.elements['email'];
   password = form.elements['password'];
   const capitalRegex =  /[A-Z]/g;
   const smallRegex = /[a-z]/g;
   const numberRegex = /[0-9]/g;

   if (password.value === '') {
       username.value = '';
       email.value = '';
       alert('You must enter your password!');
       password.style.borderColor = 'red';
   }
   else if (!password.value.match(capitalRegex)) {
       alert('Your password should have at least one capital!');
       password.style.borderColor = 'red';
   }
   else if(!password.value.match(smallRegex)) {
       alert('Your password should have at least one small letter!');
       password.style.borderColor = 'red';
   }
   else if(!password.value.match(numberRegex)) {
    alert('Your password should have at least one number!');
    password.style.borderColor = 'red';
   }
   else if (password.value.length < 8) {
    alert('Your password should consist of at least 8 characters');
    password.style.borderColor = 'red';
   }
   else {
       password.style.borderColor = 'green';
   }
}

function usernameBlank () {
    if (!username.value) {
        alert('You must enter your username!');
        username.style.borderColor = 'red';
    }
    else {
        username.style.borderColor = 'green';
    }
}

function emailFormat () {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(regex)) {
        alert('Your e-mail has to be in correct format!');
        email.style.borderColor = 'red';
    }
    else {
        email.style.borderColor = 'green';
    }
}

function matchPassword () {
    const password2 = form.elements['password2'];
    
    if(password.value !== password2.value) {
        alert('The Confirmed password should match the assword!');
        password2.style.borderColor = 'red';
    }
    password2.style.borderColor = 'green';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    passwordConfirmation();
    usernameBlank();
    emailFormat();
    matchPassword();
});