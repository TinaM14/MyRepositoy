const a = document.querySelector('#w3r');

function getAttributes () {
    console.log(a.getAttribute('href'));
    console.log(a.getAttribute('hreflang'));
    console.log(a.getAttribute('rel'));
    console.log(a.getAttribute('target'));
    console.log(a.getAttribute('type'));
}