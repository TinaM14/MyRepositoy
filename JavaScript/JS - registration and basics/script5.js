const button = document.querySelector('#btn');
const target = document.querySelector('#target');
const body = document.querySelector('body');
let counter = 0;
let interval;


target.addEventListener('mouseover', () => {
    clearInterval(interval);
    counter = 0;
});

const jump = () => {

    interval = setInterval(function() {

        target.style.position = "absolute";
        target.style.top = Math.floor(Math.random() * 100) + "%";
        target.style.left = Math.floor(Math.random() * 100) + "%";
        // target.style.right = `${Math.ceil(Math.random()*(800-0)+0)}px`;
        // target.style.bottom = `${Math.ceil(Math.random()*(800-0)+0)}px`;

        counter++;
        console.log(counter);

        if (counter === 20) {
            clearInterval(interval);
            counter = 0;
        }
    }, 1000)
}

button.addEventListener('click', () => {
    jump();
});

