// function Person (name, surname, dish) {
//     this.name = name;
//     this.surname = surname;
//     this.dish = dish;
//     this.app = function () {
//         return `I am ${name}  ${surname}, and my favourite dish is ${dish} `;
//     }


// let arr = [];

// do {
//         let name = prompt("Enter name: ","");
//         let surname = prompt("Enter surname: ","");
//         let dish = prompt("Enter dish: ","");

//         arr.push(new Person(name,surname,dish));
//         arr.forEach(p => {console.log(p.app())});
//     } while (confirm("More?"))
// }

//2.zadatak
// let bandInfo=[];

// function Band () {
//     this.bandName = '';
//     this.bandYear = '';
// }

// Band.prototype.fullBandInfo = function(){
//     if (1979 < this.bandYear < 1990) {
//         return this.bandName + " " + this.bandYear;
//     }
// }


// function createBand() {
//     let band = new Band();
//     band.bandName = prompt("Please enter band name:","");
//     band.bandYear = prompt("Please enter band year:","");

//     return band;
// }

// function print() {
//     for (let i = 0; i < bandInfo.length; i++) {
//         console.log(bandInfo[i].fullBandInfo());
//     }
// }

// do {
//     bandInfo.push(createBand());
// } while (confirm('More?'))

// print();

//3. zadatak



//     let rowNumber = Number(prompt("Row number?", ""));
//     let columnNumber = Number(prompt("Column number?", ""));

// function createTable (row, column) {
//     let table = document.querySelector('.table');
//     let rowCount = 0;
//     let columnCount = 0;

//     for (let r = 0; r < row; r++) {
//         let tableRow = document.createElement("tr");
//         for (let c = 0; c < column; c++) {
//             let tableColumn = document.createElement("td");
//             tableRow.appendChild(tableColumn);
//             tableColumn.innerText = "Row: " + rowCount + " Col: " + columnCount;
//             columnCount++;
//         }
//         table.appendChild(tableRow);
//         rowCount++;
//     }
//     body.appendChild(table);
// }


// createTable(rowNumber, columnNumber);

//4.zadatk

// let library = [
//     { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', libraryID: 1254},
//     { author: 'Antun Gustav Matoš', title: 'Tired Tale', libraryID: 4264},
//     { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', libraryID: 3245}
//     ];


//     console.log(library.sort((x, y) => {
//         if (x.title < y.title) {
//             return -1;
//         }
//         else if (x.title > y.title) {
//             return 1;
//         }
//         else {
//             return 0;
//         }
//     }));

//     console.log(library.sort((x, y) => {
//         if (x.title < y.title) {
//             return -1;
//         }
//         else if (x.title > y.title) {
//             return 1;
//         }
//         else {
//             return 0;
//         }
//     }));

//     function  NewObject (author, title, libraryID) {
//         this.author = author;
//         this.title = title;
//         this.libraryID = libraryID; 
//     }

//     let obj = new NewObject (prompt("Author: ", ""), prompt("Title: ", ""), Number(prompt("libraryID:", "")));

//     NewObject.prototype.add = function () {
//         library.push(obj);
//         return library;
//     }

// console.log(obj.add());

//5. zadatak

// let array1 = [10, 22, 32, 61, 2312313, 205];
// let array2 = [32, 30, 1, 61, 205, 102];

// let array3 = array1.concat(array2);
// let removeDuplicate = [...new Set(array3)];
// console.log(removeDuplicate);

// let array4 = array1.filter(x => array2.includes(x));
// console.log(array4);

//6. zadatak

// let library = [
//     { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', borrowed: true},
//     { author: 'Antun Gustav Matoš', title: 'Tired Tale', borrowed: false},
//     { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', borrowed: false}
//     ];

//     let ul = document.querySelector('.ul');

// for (let i = 0; i < 3; i++) {
//     let li = documnet.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML = ` ${library[i].author} - ${library[i].title} - ${library[i].borrowed}`;
// }

// body.appendChild(ul);

// const bookList = document.querySelector(".js-book-list");

// const ulElement = document.createElement("UL")
// for(index in library) {
//     let liElement = document.createElement("LI");


//     liElement.innerHTML = `${library[index].author} - ${library[index].title} - ${library[index].borrowed}`

//     if(library[index].borrowed) {
//         liElement.classList.add("borrowed")
//     }
//     else {
//         liElement.classList.add("notBorrowed")
//     }

//     ulElement.append(liElement);
// }

// bookList.append(ulElement);


//7. zadatak
//reggex
// let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

// let text= prompt("Enter sentence: ", "");
// let wordCounter= text.match(/(\w+)/g).length;
// console.log(wordCounter);

//filip
//     let sentence = "Moje ime je ? Filip.";

// let stringArray = sentence.split(" ");

// console.log(stringArray);

// let newStringArray = stringArray.filter(word => !separators.includes(word));

// let counter = 0;
// newStringArray.forEach(word => {
//     counter++;
// })

// console.log(counter)

//8. zadatak

// let arr = [];


// function random() {
//     for (let i = 0; i < 3; i++) {
//         let rnd = Math.floor(Math.random() * 3) + 1;
//         arr.push(rnd);
//     }
//     console.log(arr);
//     if (arr[0] === arr[1] && arr[1] === arr[2]) {
//         console.log('Jackpot!');
//     }
//     else {
//         console.log('Try again!');
//     }

// }

// random(); 

//9. zadatak

let getBudgets = [
    { name: "John", age: 21, budget: 23000 }, 
    { name: "Steve", age: 32, budget: 40000 }, 
    { name: "Martin", age: 16, budget: 2700 }
    ];

let salary = 0;

function sum () {
    for (let i = 0; i < getBudgets.length; i++) {
        salary = salary + getBudgets[i].budget;
    }
    console.log("Sum of people budgets is " + salary);
}

sum();



