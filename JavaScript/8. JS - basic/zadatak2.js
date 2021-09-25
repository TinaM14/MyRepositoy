// 2. zadatak

function shapesCalculator (a, b, c) { // r je a
    if (arguments[0] && arguments[1] && arguments[2]){
        let ot = a + b + c;
        let pt = (a * b) / 2;
        // let ka = Math.pow(Math.sin(a/c),-1);
        let ka = Math.asin(arguments[0] / arguments[2]) * 180/Math.PI;
         // let kb = Math.pow(Math.cos(b/c),-1);
        let kb = 180 - 90 - ka;
      

        return 'Opseg trokuta: ' + ot + '\n' +
        'Površina pravokutnog trokuta: ' + pt +
        '\n' + 'Kut alfa: ' + ka +
        '\n' + 'Kut beta: ' + kb;
    }
    else if (arguments[0] && arguments[1]){
        let op = 2 * (a + b);
        let pp = a * b;
        return 'Opseg pravokutnika: ' +  op + 
        '\n' + 'Površina pravokutnika: ' + pp;
    }
    else if (arguments[0]){
        let o = 2 * a * Math.PI;
        let p = a**2 * Math.PI;
        return 'Opseg kruga: ' + o + 
        '\n' + 'Površina kruga: ' + p;
    }
}

console.log(shapesCalculator(4));
console.log(shapesCalculator(-1));
console.log(shapesCalculator(8, 4));
console.log(shapesCalculator(1, 10));
console.log(shapesCalculator(6, 8, 10));