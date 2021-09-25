let guessButton = document.querySelector('.guessButton');
let numInput = document.querySelector('.numInput');

function randomNumber () {
    let rndNum = 5;
    console.log(rndNum);
    return rndNum;
}

function userInput () {
    if (numInput.value == randomNumber()) {
        document.querySelector('#someId').style.display = 'block';
    }
    else if (numInput.value < randomNumber()) {
        alert('MORE');
        numInput.value = '';
    }
    else {
        alert('LESS');
        numInput.value = '';
    }
}

guessButton.addEventListener('click', randomNumber);
numInput.addEventListener('change', userInput);


function playAgain () {
    numInput.value = '';
    document.querySelector('#someId').style.display = 'none';

}
document.querySelectorAll('.guessButton')[1].addEventListener('click', playAgain);
