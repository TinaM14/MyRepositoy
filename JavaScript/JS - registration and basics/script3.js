function press (event) {
    document.querySelector('p').innerHTML = `You pressed ${event.key}`;
}

window.addEventListener('keydown', press)