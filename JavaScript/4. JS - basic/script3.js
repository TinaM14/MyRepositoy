let object = {ime: 'Blaža', prezime: 'Grabovac'};
let mapa = new Map;

mapa.set('informacije', {ime: 'Tina', godine: 23});
mapa.set('funkcija', function () {
    console.log('Haj');
});
mapa.set('brojevi', [1, 2, 3]);
mapa.set('object', 25);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get('object'));