const input = document.querySelector('.js-input');

function listener (event) {

    if(event.key === '5') {
        event.preventDefault();
    } 
    else {
        console.log(input.value);
    }
    
}

input.addEventListener('keydown', listener);