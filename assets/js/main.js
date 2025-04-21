// ### Snack 1

// INPUT: `[1,2,3,4,5,6,7]`
// OUTPUT: `14`

// INPUT: `[5,10,15,20]`
// OUTPUT: `25`

// INPUT: `[10,10]`
// OUTPUT: `10`

const numeri = [1, 2, 3, 4, 5, 6, 7];
const ultimo = numeri[numeri.length - 1] * 2;

console.log(ultimo);

const numeri2 = [5, 10, 15, 20];
const ultimo2 = numeri2[numeri2.length - 1] + 5;

console.log(ultimo2);

const numeri3 = [10, 10];
const ultimo3 = numeri3[numeri3.length - 1];

console.log(ultimo3);

// ### Snack 2

// INPUT: `1, "Ciao"`
// OUTPUT: `"oaiC"`

// INPUT: `26, "Test"`
// OUTPUT: `"Test"`

// INPUT: `117, "Vue"`
// OUTPUT: `"euV"`

// *NOTA: i parametri in ingresso per la funzione sono 2*

let numeroParola = [1, "Ciao"];
numeroParola.shift();
const contrario = numeroParola[0].split("").reverse().join("");
console.log(contrario);

let numeroParola2 = [26, "Test"];
numeroParola2.shift();
console.log(numeroParola2);

let numeroParola3 = [117, "Vue"];
numeroParola3.shift();
const contrario2 = numeroParola3[0].split("").reverse().join("");
console.log(contrario2);
