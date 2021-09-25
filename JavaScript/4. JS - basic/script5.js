let input = document.querySelector('input');

const print = () => {
    let stop = (input.value < 18) ? 'Under 18' : 'Old man yeah'
    console.log(stop);
}

input.addEventListener('change', print)


