// Listas, Objetos y Fechas en JS

// Listas / tambien se le llama array, arreglo o vectores
/* Una lista es un conjunto de variables puestas en orden */
/* Listas: Una lista es una colección de valores ordenados que se pueden acceder por su índice. 
    En JavaScript, las listas se llaman arrays y se pueden crear de dos formas: usando corchetes [] o usando el constructor new Array(). */
const lista = [1, "hola", true, undefined, null]; // lista con 5 elementos de diferentes tipos
const lista2 = new Array(2, "hola", true, undefined, null); // // lista con los mismos elementos que lista
const lista3 = new Array(3); // lista vacía con longitud 3
lista3[0] = "Soy el primer elemento, index 0"; // asignando un valor al primer elemento de lista3
const lista4 = [lista, lista2, lista3]; // lista que contiene otras listas como elementos

/* Para acceder a los elementos de una lista, se usa la notación de corchetes con el índice del elemento. 
    Por ejemplo, lista[0] devuelve el primer elemento de lista, que es 1. 
    Los índices empiezan desde cero, por lo que el último elemento de una lista tiene el índice igual a la longitud de la lista menos uno. 
    Por ejemplo, lista[lista.length - 1] devuelve el último elemento de lista, que es null. */

/* Para mostrar el contenido de una lista, se puede usar la función console.log(), que imprime el valor en la consola. */
console.log(lista);   // imprime [1, "hola", true, undefined, null]
console.log(lista2);  // imprime [2, "hola", true, undefined, null]
console.log(lista3);  // imprime ["Soy el primer elemento, index 0", undefined, undefined]
console.log(lista4);  // imprime [[1, "hola", true, undefined, null], [2, "hola", true, undefined, null], ["Soy el primer elemento, index 0", undefined, undefined]]

/* Las listas tienen muchas propiedades y métodos que se pueden usar para manipular sus elementos. 
    Por ejemplo, la propiedad length devuelve la longitud de una lista, y el método push() agrega un elemento al final de una lista. */


/* ------------------------------------------------------------------------------------------------------ */

// Objetos
/* Son representaciones en datos de objetos de la vida real*/
/* Objetos: Un objeto es una colección de propiedades que se pueden acceder por su nombre. 
    En JavaScript, los objetos se pueden crear de dos formas: usando llaves {} o usando el constructor new Object(). */
const movil = {
    //atributos
    // atributo: valor;
    altura:10,
    anchura:5,
    marca: "Huawei",
    isWhite: false,
    contactos: ["Yesly", "Maria", "Catalina"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}

/* Para asignar o modificar las propiedades de un objeto, se puede usar el operador de asignación = con el nombre de la propiedad.  */
movil.anyo = 2019;          // asigna un nuevo valor a la propiedad anyo del objeto movil
movil.marca = "Samsung";    // modifica el valor de la propiedad marca del objeto movil

/* Para acceder a las propiedades de un objeto, se puede usar la notación de punto . o la notación de corchetes [] con el nombre de la propiedad. 
    Por ejemplo, movil.altura o movil["altura"] devuelven el valor de la propiedad altura del objeto movil, que es 10. 
    Las propiedades también pueden ser otras listas u objetos. 
    Por ejemplo, la propiedad contactos del objeto movil es una lista con tres elementos, y la propiedad tarjeta es otro objeto con dos propiedades. */
console.log(movil.altura); // imprime 10

/* Los objetos tienen muchas propiedades y métodos que se pueden usar para manipular sus propiedades. 
    Por ejemplo, el método hasOwnProperty() devuelve un valor booleano que indica si el objeto tiene una propiedad con el nombre dado. */

/* ------------------------------------------------------------------------------------------------------ */

// Fechas
/* Fechas: Una fecha es un objeto que representa un momento específico en el tiempo. 
    En JavaScript, las fechas se pueden crear usando el constructor new Date(). */

//crear una fecha
const ahora = new Date(); // crea una fecha con el momento actual
console.log(ahora); // imprime la fecha actual con el formato "Tue Oct 31 2023 15:03:48 GMT-0500 (hora estándar de Ecuador)"

const fecha_milis = new Date(10);// Utilizando los milisegundos - // crea una fecha con 10 milisegundos después del 1 de enero de 1970 UTC
console.log(fecha_milis);// imprime la fecha con 10 milisegundos después del 1 de enero de 1970 UTC con el formato "Thu Jan 01 1970 00:00:00 GMT+0000 (hora estándar de Ecuador)"

const fecha_cadena = new Date("march 25 2020"); // crea una fecha a partir de una cadena con el formato "mes día año"
console.log(fecha_cadena); // imprime la fecha del 25 de marzo de 2020 con el formato "Wed Mar 25 2020 00:00:00 GMT+0000 (hora estándar de Ecuador)"

const fecha_valores = new Date(2022, 0, 15); // crea una fecha a partir de valores numéricos para el año, el mes y el día
console.log(fecha_valores)// imprime la fecha del 15 de enero de 2022 con el formato "Sat Jan 15 2022 00:00:00 GMT+0000 (hora estándar de Ecuador)"

/* Para acceder a los componentes de una fecha, se pueden usar varios métodos que devuelven el valor de la fecha en una unidad específica. 
    Por ejemplo, el método getDate() devuelve el día del mes, 
    el método getMonth() devuelve el mes (empezando desde cero), 
    y el método getFullYear() devuelve el año. */
const dia = ahora.getDate();        // obtiene el día del mes de la fecha ahora
const mes = ahora.getMonth() + 1;   // obtiene el mes de la fecha ahora y le suma uno para que empiece desde uno
const anyo = ahora.getFullYear();   // obtiene el año de la fecha ahora

// Para mostrar el contenido de una fecha, se puede usar la función console.log(), que imprime el valor en la consola.
console.log(dia, mes, anyo) // imprime los valores numéricos del día, mes y año separados por espacios

/* Las fechas tienen muchas propiedades y métodos que se pueden usar para manipular sus componentes. 
    Por ejemplo, el método setDate() modifica el día del mes de una fecha, y 
    el método getTime() devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 UTC. */