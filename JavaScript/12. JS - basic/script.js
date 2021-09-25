   
 let arr = [{ name: 'Zagreb', postalCode: 10000, type: 1 },
 { name: 'Varazdin', postalCode: 42000, type: 2 },
 { name: 'Split', postalCode: 21000, type: 2 },
 { name: 'Rijeka', postalCode: 51000, type: 3 },
 { name: 'Osijek', postalCode: 31000 },
 { name: 'Zadar', postalCode: 23000 }];

 // { name: "Zagreb", postalCode: 10000, type: 1 }
 // { name: "Split", postalCode: 21000, type: 2 }
 // { name: "Varazdin", postalCode: 42000, type: 2 }
 // { name: "Rijeka", postalCode: 51000, type: 3 }
 // { name: "Osijek", postalCode: 31000 }
 // { name: "Zadar", postalCode: 23000 

arr.sort((a,b) => a.name - b.name && a.type - b.type);
console.log(arr);