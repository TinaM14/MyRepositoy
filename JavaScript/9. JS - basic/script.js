//1. zadatak

function buildings(number) {
    if (number < 0) {
        return number;
    }
    else if (number === 15) {
        return number = 13;
    }
    else if (number > 13) {
        return number - 2;
    }
    else if (number >= 0) {
        return number + 1;
    }   
}

console.log(buildings(-5));
console.log(buildings(15));
console.log(buildings(5));
console.log(buildings(25));

//2. zadatak

function hydrated (hours) {
    let liters;
    liters = hours * 0.5;
    return Math.floor(liters);
}

console.log(hydrated(3));
console.log(hydrated(6.7));
console.log(hydrated(11.8));

//3. zadatak

function centuries (year) {
    century = Math.ceil(year/100);
    console.log(century);
}

centuries(1387);


