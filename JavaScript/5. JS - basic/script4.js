let randomNumber = Math.ceil(Math.random() * (12 -1) +1);
console.log(randomNumber);

let number = 0;

    do {
        number++;
} while (number !== randomNumber);

console.log('Yeah, you guess the number! => ' + number);





