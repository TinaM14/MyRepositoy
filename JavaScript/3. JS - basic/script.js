const button = document.querySelector('button');
const para = document.querySelector('p');

const obj = {education: 'red',
            recreational: 'blue',
            social: 'pink',
            diy: 'green,',
            charity: 'yellow',
            cooking: 'tomato',
            relaxation: 'brown',
            music: 'lightskyblue',
            busywork: 'orange'};


function myFetch() {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(function (json) {
        para.innerHTML = json.activity;

        // json.forEach(item => {
        //     for(let i = 0; i<json.length; i++) {
        //         if(item.type == Object.keys(obj)) {
        //             button.style.backgroundColor = obj[i];
        //         }
        //     }
        // });
        
    })
    .catch(err => console.log(err))
}

button.addEventListener('click', myFetch);