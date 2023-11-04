// Comparaciones
/* Las comparaciones en JS son operaciones que se usan para evaluar si dos valores son iguales, diferentes, mayores o menores. 
    Hay dos tipos de comparaciones: las débiles y las fuertes. */

// Igualdad

// igualdad debil ==
if (5 == 5) {
    console.log("5 es igual a 5");
}

// igualdad fuerte ===
if (5 === 5) {
    console.log("5 es igual a 5");
}

/* Diferencia entre == y === */
/* 
    ==  --> solo compara el valor
    === --> compara el valor y el tipo
*/

let a = 5;
console.log(typeof a);

let b = "5";
console.log(typeof b);

/* Las comparaciones débiles usan el operador == o != y solo comparan el valor de los operandos, sin importar su tipo. 
    Por ejemplo, 5 == "5" es verdadero porque ambos tienen el mismo valor numérico, aunque uno sea un número y el otro una cadena. */
if (a == b) {
    console.log("a es igual a b - Débil");
}

/* Las comparaciones fuertes usan el operador === o !== y comparan tanto el valor como el tipo de los operandos. 
    Por ejemplo, 5 === "5" es falso porque aunque tienen el mismo valor numérico, tienen tipos diferentes. */
if (a === b) {
    console.log("a es igual a b - Fuerte");
}

//Desigualidades
/* Hay 3 tipos de desigualdad: las mayores, las menores y las que no son iguales */

// las que no son iguales
let c = 4;
let d = "4";

// valor
if (c != d) {
    console.log("c es diferente a d - Débil");
}

// valor y tipo
if (c !== d) {
    console.log("c es diferente a d - Fuerte");
}

// las mayores y menores
// Comparaciones mayor que y menor que

/* Las comparaciones mayores y menores usan los operadores > o < y evalúan si un valor es mayor o menor que otro. 
    También se pueden usar los operadores >= o <= para incluir la igualdad. 
    Por ejemplo, 10 > 5 es verdadero porque 10 es mayor que 5, y 10 >= 10 también es verdadero porque 10 es igual a 10. */

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}

if (max >= 10) {
    console.log("max es mayor o igual que 10");
}

if (min < max) {
    console.log("min es menor que max");
}

if (min <= max) {
    console.log("min es menor o igual que max");
}
