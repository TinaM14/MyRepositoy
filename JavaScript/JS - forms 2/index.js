// exerciseTitle('Friday exercise: Password checker');

const form = document.querySelector('#password-checker-form');
const passwordCriteria = document.querySelector('.password-criteria').children;
let password = 0;
let SUM_OF_POINTS = 0;
let NUMBERS_OF_RULES_ENFORCED = 0;

function isLongerThan8Characters() {
    password = form.elements['password'].value;

    if (password.length > 8) {
        SUM_OF_POINTS = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[0].style.color = 'green';
    }
    else {
        passwordCriteria[0].style.color = 'red';
    }
}

function containsLowercaseLetter() {
    let regex = /[a-z]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[1].style.color = 'green';
    }
    else {
        passwordCriteria[1].style.color = 'red';
    }
}

function containsUppercaseLetter() {
    let regex = /[A-Z]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[2].style.color = 'green';
    }
    else {
        passwordCriteria[2].style.color = 'red';
    }
}

function containsADigit() {
    let regex = /[0-9]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[3].style.color = 'green';
    }
    else {
        passwordCriteria[3].style.color = 'red';
    }
}

function containsASymbol() {
    let regex = /[^\w]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[4].style.color = 'green';
    }
    else {
        passwordCriteria[4].style.color = 'red';
    }
}

function containsFiveUniqueCharacters() {
    let regex = /[#?!@$%^&*-].{4,}$/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;

        passwordCriteria[5].style.color = 'green';
    }
    else {
        passwordCriteria[5].style.color = 'red';
    }
}

function checkPassword(password) {
    let percentage = SUM_OF_POINTS + NUMBERS_OF_RULES_ENFORCED * 10;
    console.log(percentage);

    const passwordStreinghtBar = document.querySelector('.password-strength-bar');
    passwordStreinghtBar.style.width = `${percentage}%`;

    if (percentage <= 50) {
        passwordStreinghtBar.style.backgroundColor = 'red';
    }
    else if (50 < percentage <= 75) {
        passwordStreinghtBar.style.backgroundColor = 'orange';
    }
    else if (75 < percentage < 100) {
        passwordStreinghtBar.style.backgroundColor = 'yellow';
    }
    else if (percentage === 100) {
        passwordStreinghtBar.style.backgroundColor = 'green';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isLongerThan8Characters();
    containsLowercaseLetter();
    containsUppercaseLetter();
    containsADigit();
    containsASymbol();
    containsFiveUniqueCharacters();
    checkPassword();
});