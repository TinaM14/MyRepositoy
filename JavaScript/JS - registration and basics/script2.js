const buttonStyle = document.querySelector('.change-style');
const buttonClass = document.querySelector('.add-class');
const box = document.querySelector('.box');

function changeStyle () {
    box.style.backgroundColor = "red";
}

function addClass () {
    box.classList.toggle('border');
}

buttonStyle.addEventListener('click', changeStyle);
buttonClass.addEventListener('click', addClass);