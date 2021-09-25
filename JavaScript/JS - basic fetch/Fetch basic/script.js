fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
.then(response => response.json())
.then(function (data) {

    /*  <figure class="album__photo">
            <img src="" alt="" title="" class="album__image" width="360" height="360">
        </figure> */

    const albumElement = document.querySelector('.album');
    data.forEach(photo => {
        const figureElement = document.createElement('figure');
        const photoElement = document.createElement('img');
        photoElement.src = photo.url;
        photoElement.alt = photo.title;
        figureElement.append(photoElement);
        albumElement.appendChild(figureElement);
        
    });
})
.catch(err => console.error('Error!'));

// fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
//   .then((response) => response.json())
//   .then(function (data) {
//     renderPhoto(data);
//   })
//   .catch(function (err) {
//     console.log("Fetch problem: " + err.message);
//   });
// function renderPhoto(photos) {
//     photos.forEach((photo) => {
//     const albumElement = document.querySelector(".album");
//     const figureElement = document.createElement("figure");
//     const photoElement = document.createElement("img");
//     photoElement.src = photo.url;
//     photoElement.alt = photo.title;
//     figureElement.appendChild(photoElement);
//     albumElement.appendChild(figureElement);
//   });
// }