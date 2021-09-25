//Zadatak 1
const array = [1, 2, 3, 'Bootcamp', [1, 2, 3]];
console.log(array.length);

//Zadatak 2
const objekt = {p1:'html',p2:46,p3:[1,2,3] };
console.log(objekt);
objekt.p4={a:1,b:2,c:3};
console.log(objekt);

//Zadatak 3
map = new Map();
map.set('Countryes',{c1:'France',c2:'Germany'});
map.set(function(){},'Funkcija');
console.log(map);
let key=2;
var map;
map.set(key,3);
console.log(map);

//Zadatak 4
const arr = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];
console.log(arr);
const mySet = new Set(arr);
console.log(mySet);
console.log(...new Set(arr));

//Zadatak 5
//Assignment:
let x = 5;
x=4;
console.log(x);
//Comparison
console.log(2>3);
//Arithmetic
let y = 7;
let z = -y;
console.log(z);
//Logical
let logAND = 'string' && 2;
console.log(logAND);
let logOR = 0 || 2;
console.log(logOR);
//Conditional (ternary)
const rezultat = (y > 5) ? 'Vece' : 'Manje';
console.log(rezultat);