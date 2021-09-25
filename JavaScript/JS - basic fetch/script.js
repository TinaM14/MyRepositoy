function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function() {
      callback(xhr.response);
    };
    xhr.send();
  }
  function getFirstFive (data) {
      for (let i = 0; i < 5; i++) {
          console.log(data[i]);
      }
  }

  function getFirstTitle (data) {
      console.log(data[0].title);
  }

  loadAsset('https://jsonplaceholder.typicode.com/todos', 'json', getFirstFive);
  loadAsset('https://jsonplaceholder.typicode.com/todos', 'json', getFirstTitle);


  // 2.zadatak
  const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('Tina');
      }, 500);
  });

  myPromise.then(value => {console.log(value + ' Mareković')});

  // 3. zadatak

 let input = document.querySelector

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function (response) {
//         return response.json();
//     }).then(function(json){
//         let info = json;
//         let userId = info[1].id;

//         fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId).then(function (data) {
//             return data.json();
//         }).then(function (id) {
//             let idUser = id;
//             console.log(idUser);
//         })
//     });