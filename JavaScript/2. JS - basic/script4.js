// Rekurzija - pozivanje funkcije koliko puta ti treba i onda kad uvijet nije ispunjen on
// izlazi van iz funkcije

//POKEMONI 

const arr = [];

function rec(n) {
    // n = [{}]
  if (n.length === 0) {
        return; 
    }

    console.log(n)[0].species.name;

    let sljedeciEvolves = n[0].ecolves_to;
    rec(sljedeciEvolves);
    
}

rec(arr.chain.evolves_to);