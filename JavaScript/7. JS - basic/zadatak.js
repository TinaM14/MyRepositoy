//1. zadatak
function first_letter (letter){
    console.log(letter.charAt(0).toUpperCase() + letter.slice(1));
}

first_letter("bok");

//2. zadatak
function character(letter){
    for (let index = 0; index < letter.length; index++) {
        console.log(letter.charAt(index));
        // console.log(letter[index]); -> ili ovo
    }
}

character("bok");

//3. zadatak
newname = " ";
function ages (name, age){
    if (age%2 !== 0){
        for (let i = name.length -1; i>=0; i--){
            newname = newname + name[i];
        }
        return newname;
    }
    else if(age%2 === 0){
        return name + age;
    }
    else if (age>100 || name.length >= 10){
        return name;
    }
    

}

console.log(ages("Tina", 24));

//4. zadatak
 function boo(x) {
     do{
        console.log(x + " je veći od nule!");
        --x;
     }while(x>0)
          
 }

boo(12);