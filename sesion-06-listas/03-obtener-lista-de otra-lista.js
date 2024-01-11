// Cómo obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"];

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
/* array.slice(1, 4) devuelve una nueva lista que contiene los elementos desde el índice 1 hasta el índice 3 del array original  */
console.log(array.slice(1, 4)); //[ 1, 2, 3 ]
/* El array original (array) no se modifica. La función .slice() no modifica el array original, simplemente crea una copia con los elementos especificados. */

const array2 = array.slice(2, 5);
console.log(array2); // [ 2, 3, true ]

/* Aquí, el uso de -2 significa contar dos elementos desde el final del array original. */
const array3 = array.slice(2, -2);
console.log(array3); // [ 2, 3, true ]
