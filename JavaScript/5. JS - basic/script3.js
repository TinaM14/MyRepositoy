function print (age, name) {
    if (age % 2 !== 0) {
        // let newName = '';
        // for (let i = name.length - 1; i >= 0; i--) {
        //     newName = newName + name.charAt(i);
        // }
        // console.log(newName);

        // let split = name.split('');
        // let reverse = split.reverse();
        // let join = reverse.join('');

        let reverseName = name.split('').reverse().join('');

        console.log(reverseName);
    }
    else if (age % 2 === 0) {
        console.log(name + ' ' + age);
    }
    else if (age > 100 || name.length > 10) {
        console.log(name);
    }
    else {
        console.log('Error');
    }
}

print(25, 'Tina');