const button = document.querySelector('button');
const box = document.querySelector('div');
const body = document.querySelector('body');

const scroll = () => {
    window.scroll({
        top: 0,
        left:0,
        behavior: 'smooth' 
    });
}

button.addEventListener('click', scroll);

document.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        box.classList.add('header');
    }
    else if(window.scrollY > 0) {
        box.classList.remove('header');
    } 
});

// const target = document.querySelector('h2');

// function handleIntersection (entries) {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }

// const observer = new IntersectionObserver(handleIntersection);

// observer.observe(target);

//LAZY LOADING
const images = document.querySelectorAll('img');

function handleIntersection (entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
    });
}

const observer = new IntersectionObserver(handleIntersection);

images.forEach(target => observer.observe(target));




