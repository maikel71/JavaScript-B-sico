// Cómo unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2)); //[ 'hola', 2, false, null, 'adios', 8, true, undefined ]
console.log(lista1); // [ 'hola', 2, false, null ]

/* El método .concat() une las dos listas (lista1 y lista2) en una nueva lista llamada lista3. */
const lista3 = lista1.concat(lista2);
console.log(lista3); // [ 'hola', 2, false, null, 'adios', 8, true, undefined ]

// Cómo unir dos listas con el factor de propagación
console.log(...lista3); // 'hola 2 false null adios 8 true undefined'

/* El operador de propagación (...) también une las dos listas en una nueva lista llamada lista4. */
const lista4 = [...lista1, ...lista2];
console.log(lista4); // [ 'hola', 2, false, null, 'adios', 8, true, undefined ]

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2];
console.log(lista5); // [ [ 'hola', 2, false, null ], [ 'adios', 8, true, undefined ] ]
/* Aquí, lista5 no está uniendo los elementos de lista1 y lista2; en cambio, está creando una lista que contiene dos listas. */

/* En resumen, los dos primeros ejemplos (lista3 y lista4) unen las listas correctamente, mientras que el tercer ejemplo (lista5) 
    comete un error al crear una lista de listas en lugar de unir los elementos de las listas. */
