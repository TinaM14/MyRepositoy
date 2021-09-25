//1. zadatak

let minutesMil = 1000 * 60
let hoursMil = minutesMil * 60
let daysMil = hoursMil * 24
let mounthsMil = daysMil * 31
let yearsMil = mounthsMil * 12
const timePassCalculator = (doomsday) =>  {
    let todaysDate = new Date();
    let time = Math.abs(todaysDate.getTime() - doomsday.getTime());
    let years = Math.floor(time / yearsMil);
    let mounths = Math.floor((time / mounthsMil) % 12);
    let days = Math.floor((time / daysMil) % 31);
    let hours = Math.floor((time / hoursMil) % 24);
    let minutes = Math.floor((time / daysMil) % 60);
    return "D: " + days + ", M: " + mounths + ", Y: " + years + " H: " + hours + ", MIN: " + minutes;
}
console.log(timePassCalculator(new Date('04.01.1954.')));
console.log(timePassCalculator(new Date('06.29.2021.')));
console.log(timePassCalculator(new Date('07.07.2021.')));
console.log(timePassCalculator(new Date('01.12.2062.')));

// function timePassCalculator (date) {
//     let now = new Date();

//     let d = now.getDate();
//     let pastD = Math.abs(d - date.getDate());

//     let m = now.getMonth();
//     let pastM  = Math.abs((m - date.getMonth())+1);

//     let y = now.getFullYear();
//     let pastY = Math.abs(y - date.getFullYear());

//     let h = now.getHours();
//     let pastH = Math.abs(h - date.getHours());

//     let min = now.getMinutes();
//     let pastMin = Math.abs(min - date.getMinutes());

//     if (m === date.getMonth() && d === date.getDate()){
//         return 'Y: ' + pastY +
//         ' M: ' + '0' + 
//         ' D: ' + '0' +
//         ' H: ' + (Math.abs(24 - now.getHours)) + 
//         ' Min: ' + (Math.abs(60 - now.getMinutes));
//     }

//     else if (m === date.getMonth()){
//         return 'Y: ' + pastY + 
//         ' M: ' + '0' + 
//         ' D: ' + pastD + 
//         ' H: ' + pastH + 
//         ' Min: ' + pastMin;
//     }

//     return 'Y: ' + pastY + 
//     ' M: ' + pastM + 
//     ' D: ' + pastD + 
//     ' H: ' + pastH + 
//     ' Min: ' + pastMin;
        
// }

// console.log(timePassCalculator(new Date('01.04.1954.')));
// console.log(timePassCalculator(new Date('06.29.2021.')));
// console.log(timePassCalculator(new Date('07.07.2021.')));
// console.log(timePassCalculator(new Date('12.01.2062.')));
