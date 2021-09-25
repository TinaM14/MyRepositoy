const form = document.querySelector('#singUp');
const button = document.querySelector('button');

// form.addEventListener('submit', () => {
//     const username = form.elements['usermane'];
//     const password = form.elements['password'];

//     if(username.value === '') {
//         alert('Please enter username!');
//         return false;
//     }
//     else if(password.value === '') {
//         alert('Please enter password!');
//         return false;
//     }
// });

// button.addEventListener('click', () => {
//     form.submit();
// })

function validateForm () {
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;

    if(username === '') {
        alert('Please enter username!');
        return false;
    }
    else if(password === '') {
        alert('Please enter password!');
        return false;
    }
}
