// Bucles
/* Los bucles son una forma de repetir una acción o un conjunto de acciones varias veces, según una condición o un contador. 
    JavaScript tiene varios tipos de bucles, pero los más comunes son el bucle for y el bucle while. */

/* ------------------------------------------------------------------------ */

// Bucles For
/* El bucle for se usa cuando sabes cuántas veces quieres que se repita el ciclo, o cuando quieres recorrer los elementos de un arreglo o un objeto. 
    El bucle for tiene la siguiente estructura: 

    for (inicializacion; condicion; actualizacion) {
        // codigo que se ejecuta en cada iteracion
    }
*/

/* La inicialización es la parte donde se declara y se asigna un valor inicial a una variable que sirve como contador del bucle. 
    Por ejemplo, en tu código, la variable i se inicializa con el valor 0. */

/* La condición es la parte donde se evalúa una expresión lógica que determina si el bucle debe continuar o no. 
    Por ejemplo, en tu código, la condición i < 10 significa que el bucle se repetirá mientras el valor de i sea menor que 10. */

/* La actualización es la parte donde se modifica el valor del contador del bucle, generalmente incrementándolo o decrementándolo. 
    Por ejemplo, en tu código, la actualización i++ significa que el valor de i se incrementa en 1 después de cada iteración. */

/* El código que se ejecuta en cada iteración es el que está dentro de las llaves { … }. 
        Por ejemplo, en el código, el código console.log(i) muestra el valor de i en la consola en cada iteración. */

for (let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

// Veamos un ejemplo de cómo funciona el bucle for en el código:
// Inicializacion: se declara y se asigna el valor 0 a la variable i let i = 0;
// Condicion: se evalua si i es menor que 10 while (i < 10) { // Codigo: se muestra el valor de i en la consola console.log(i);
// Actualizacion: se incrementa el valor de i en 1 i++; }

// Como puedes ver, el bucle se repite 10 veces, desde i = 0 hasta i = 9, y muestra el valor de i en cada iteración.

/*
    Esto da el mismo resultado, es lo mismo pero expresada de otra manera
    i = i + 1
    i += 1
    i++
*/

/* ------------------------------------------------------------------------ */
/* El bucle for también se puede usar para recorrer los elementos de un arreglo o un objeto, usando la propiedad length o la palabra clave in, respectivamente. 
    Por ejemplo, en tu código, tienes el siguiente arreglo: */
let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

// Para recorrer este arreglo con un bucle for, puedes usar la siguiente estructura:
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); // 1 4 6 2 3 7 10 12 800
}
/* En este caso, la variable i se inicializa con el valor 0, la condición i < lista.length significa que el bucle se repetirá mientras el valor de i sea menor 
    que la longitud del arreglo, y la actualización i++ significa que el valor de i se incrementa en 1 después de cada iteración. */

/* El código que se ejecuta en cada iteración es el que está dentro de las llaves { … }. 
    Por ejemplo, en tu código, el código console.log(lista[i]) muestra el elemento del arreglo que corresponde al índice i en la consola en cada iteración. */

// Veamos un ejemplo de cómo funciona el bucle for con tu código:

// Inicializacion: se declara y se asigna el valor 0 a la variable i let i = 0;
// Condicion: se evalua si i es menor que la longitud del arreglo while (i < lista.length) { // Codigo: se muestra el elemento del arreglo que corresponde al indice i en la consola console.log(lista[i]);
// Actualizacion: se incrementa el valor de i en 1 i++; }

// Como puedes ver, el bucle se repite 9 veces, que es la longitud del arreglo, y muestra el elemento del arreglo que corresponde al índice i en cada iteración.

/* ------------------------------------------------------------------------ */

/* JavaScript también ofrece otras formas de recorrer un arreglo o un objeto con un bucle for, como el bucle for…of o el bucle for…in, 
    que simplifican la sintaxis y evitan el uso de un contador.  */

// Estructura for...of
/* El bucle for...of se utiliza para recorrer elementos de estructuras de datos iterables, como matrices o cadenas de texto. 
    Es útil cuando deseas acceder a cada elemento de la estructura uno por uno. */
for (let valor of lista) {
    console.log(valor);
}

/* En este ejemplo, el bucle for...of recorre cada elemento de la matriz lista y muestra su valor en la consola. */

/* Imagina que tienes una caja llena de cartas, y quieres mirar cada carta una por una. 
    El bucle for...of es como tomar una carta a la vez y ver su contenido. 
    Es útil cuando deseas trabajar con elementos uno por uno en una lista, 
    como números en una matriz o letras en una cadena de texto. */

/* ------------------------------------------------------------------------ */
// Estructura forEach
/* forEach es un método que se utiliza en matrices para ejecutar una función proporcionada una vez para cada elemento de la matriz. 
    Es una forma conveniente de recorrer elementos de una matriz y realizar una operación en cada uno de ellos. */
lista.forEach((valor) => {
    console.log(valor);
});

/* Aquí, forEach se utiliza para recorrer la matriz lista y ejecutar la función proporcionada para mostrar cada elemento en la consola. */

/* Piensa en una lista de reproducción de música. El bucle forEach es como presionar el botón de reproducción en tu lista de canciones. 
    Reproduce cada canción en orden y te permite hacer algo con cada canción, como mostrar su título. */

/* ------------------------------------------------------------------------ */
// Estructura for...in
/* El bucle for...in se utiliza para recorrer las propiedades enumerables de un objeto. 
    Es útil cuando deseas acceder a las propiedades de un objeto y realizar operaciones en ellas. */
let persona = {
    nombre: "Maikel",
    apellido: "Gonzalez",
    edad: 22,
    isDeveloper: true,
};

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

/* En este caso, el bucle for...in recorre las propiedades del objeto persona y muestra tanto el nombre de la propiedad como su valor en la consola. */

/* Si tienes una caja con etiquetas, y cada etiqueta tiene un nombre y una descripción, el bucle for...in te permite mirar cada etiqueta una por una. 
    Primero ves el nombre de la etiqueta y luego lees su descripción. 
    Es útil cuando deseas trabajar con las propiedades de un objeto y realizar operaciones en ellas, como mostrar sus valores. */

/* ------------------------------------------------------------------------ */
/* En resumen, cada uno de estos bucles tiene un propósito específico:

    for...of es útil para recorrer elementos de estructuras iterables como matrices.
    forEach es conveniente cuando deseas realizar una operación en cada elemento de una matriz.
    for...in es útil para recorrer las propiedades de un objeto y realizar operaciones en ellas.

    La elección del bucle adecuado depende de lo que estés tratando de lograr en tu código.
 */
