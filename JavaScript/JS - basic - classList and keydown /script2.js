const redButton = document.querySelector('.but1');
const blueButton = document.querySelector('.but2');

function changeColorRed () {
    document.querySelector('h1').classList.toggle('red');


}
function changeColorBlue () {
    document.querySelector('h1').classList.toggle('blue');
}

redButton.addEventListener('click', changeColorRed);
blueButton.addEventListener('click', changeColorBlue);