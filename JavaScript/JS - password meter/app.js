const input = document.querySelector('input');
const meter = document.querySelector('meter');

const strongPassword = () => {
    if(input.value.length > 8) {
        meter.value = 50;
    }
    else{
        meter.value = 10;
    }
    if (input.value.match('g')) {
        meter.value = 70;
    }
}

input.addEventListener('keyup', strongPassword);