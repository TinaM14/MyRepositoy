let max = 0;
let min = 0;

function highAndLow (stringNumber) {
    let newArray = stringNumber.split(" ");
    max = Math.max(...newArray);
    min = Math.min(...newArray)
    return [max, min];
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 -9 3 4 -5"));
console.log(highAndLow("1 -9 3 10 -5"));


//3. zadatak
let numOfVowels = 0;
let numOfConsonants = 0;
const vowels = ["a", "e", "i", "o", "u"];

function putI (word) {
    for(let letter of word.toLowerCase()) {
        if(vowels.includes(letter)) {
            numOfVowels++;
        }
        else {
            numOfConsonants++;
        }
    }
    // word.split(“”).forEach(letter => {
    //     if(vowels.includes(letter.toLowerCase())) {
    //         numOfVowels++
    //     }
    //     else {
    //         numOfConsonants++;
    //     }
    // })
    if(word.charAt(0) === "I" || numOfVowels >= numOfConsonants
        || word.charAt(0) === word.charAt(0).toLowerCase()) {
            return "Invalid word"
        }
        else {
            word = "i" + word;
            return word
        }
}

console.log(putI("Apple"))
console.log(putI("Bootcamp"))