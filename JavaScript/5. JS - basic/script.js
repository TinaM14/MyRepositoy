function transform (string) {
    if (typeof string == 'string') {
        let firstLetter = string.charAt(0).toUpperCase();
        let otherLetters = string.slice(1);
        let newString = firstLetter + otherLetters;
        console.log(newString);
    }
    else {
        console.log('You must enter string!')
    } 
}

transform('tina');
transform(5);
transform('blaženka');