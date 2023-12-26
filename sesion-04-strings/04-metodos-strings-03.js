// Metodos de cadenas de texto (parte 3)
// https://regexr.com

/* Buscar todas las ocurrencias de una palabra en un texto utilizando expresiones regulares: */
let texto_largo =
    "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_largo.match(/no/g));
/* - match(regexp): Busca todas las ocurrencias de la expresión regular en la cadena y devuelve un array con los resultados.
    - En este caso, la expresión regular /no/g busca todas las ocurrencias de la palabra "no" en el texto.*/

/* Comprobar si una palabra existe dentro del texto: */
// Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("terremoto"));
/* - includes(substring): Devuelve true si la cadena contiene la subcadena dada, de lo contrario, devuelve false.
    - En este ejemplo, se verifica si la palabra "prefiere" está presente en el texto, y luego se verifica si la palabra "terremoto" está presente. */

/* Verificar si un texto comienza con una palabra específica: */
// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("T"));
/* - startsWith(prefix): Devuelve true si la cadena comienza con el prefijo dado, de lo contrario, devuelve false.
    - En este caso, se verifica si el texto comienza con la letra "T". */

/* Verificar si un texto termina con una palabra específica: */
// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("árboles."));
/* - endsWith(suffix): Devuelve true si la cadena termina con el sufijo dado, de lo contrario, devuelve false.
    - En este ejemplo, se verifica si el texto termina con la palabra "árboles.". */
