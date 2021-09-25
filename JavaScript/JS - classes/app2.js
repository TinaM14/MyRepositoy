// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         let today = new Date();
//         return today.getFullYear() - this.year;
//     }
// }

// let car = new Car('Audi', 2016);
// console.log(car.age());





// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age(drvo) {
//         return drvo - this.year;
//     }
// }

// let date = new Date();
// let todayYear = date.getFullYear();

// let car = new Car('Audi', 2020);
// console.log(car.age(todayYear));


class povrsinaPravokutnika {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    formula() {
        return this.a * this.b;
    }

    opseg(stranica) {
        return this.a + this.b + stranica;
    }
}

let c = 5;

let pravokutnik = new povrsinaPravokutnika(10, 30);
console.log(pravokutnik.opseg(c));