const select = document.querySelector('select');

function myFetch () {
    fetch('https://restcountries.eu/rest/v2/all')
.then(function (response) {
    let json = response.json();
    console.log(json);
    return json;
})
.then(function (json) {
    
    json.forEach(item => {
        let options = document.createElement('option');
        options.innerHTML = item.name;
        select.appendChild(options);
    });
})
.catch(err => console.log(err));
}

myFetch();