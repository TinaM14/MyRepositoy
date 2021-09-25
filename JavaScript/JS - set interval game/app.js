const button = document.querySelector('.button');
const circle = document.querySelector('.circle');

let interval = 0;
let counter = 0;

const startGame = () => {
    counter = 0;
   
    if(interval) {
        clearInterval(interval);
        
    }
    else {
          interval = setInterval(function(){
            let random = Math.floor(Math.random() * 500);
            circle.style.top = random + 'px';
            circle.style.left = random + 'px';

            counter++;

            if(counter == 10) {
                    clearInterval(interval);
                    circle.style.backgroundColor = 'white';
                    circle.style.borderColor = 'white';
            }
            }, 300);  
    }
}

const stopGame = () => {
    clearInterval(interval);
    circle.style.backgroundColor = 'rgb(255, 192, 241)';
    circle.style.borderColor = 'rgb(255, 192, 241)';
    button.style.backgroundColor = 'rgb(213, 248, 57)';
    button.style.borderColor = 'rgb(213, 248, 57)';
    button.innerHTML = 'BRAVO!';
    button.style.color = 'black';
}

circle.addEventListener('mouseover', stopGame);
button.addEventListener('click', startGame);