// Sesion 4 - Strings (cadenas de caracteres)

/* Hay tres formas principales de declarar strings en JavaScript: con comillas simples, comillas dobles y comillas invertidas (backticks). */

///// Strings Estaticos

/* Comillas Simples y Dobles:

    - Las comillas simples (' ') y las comillas dobles (" ") se utilizan para declarar strings de manera estática.
    - Puedes intercambiar entre comillas simples y dobles según tus preferencias, siempre y cuando mantengas la coherencia.
    - Se pueden utilizar para incluir comillas dentro del string al mezclar el tipo de comillas, como se muestra en 
        los ejemplos str_comillas, str_comillas_simples, str_comillas_dobles, y str_comillas_simples_2. 
*/

let str_sng = "Hola soy un texto con comillas simples";
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = 'El otro dia me dijo literalmente  "ve a sacar la basura"';
let str_comillas_simples =
    'El otro dia me dijo literalmente  "ve a sacar la basura"';
let str_comillas_dobles =
    "El otro dia me dijo literalmente  've a sacar la basura'";
let str_comillas_simples_2 =
    "El otro dia me dijo literalmente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

////// Comillas invertidas (backticks)
/* Backticks (Comillas Invertidas):

    - Las comillas invertidas o backticks (`) se introdujeron en ECMAScript 6 y permiten la creación de strings de una manera más versátil.
    - Puedes incluir expresiones dentro del string utilizando la sintaxis ${expresion}. Esto se llama interpolación de variables 
        y se ve en el ejemplo del saludo (saludo).
    - Los backticks también son útiles para la creación de plantillas, como se muestra en el ejemplo de plantilla, donde se puede 
        escribir HTML de manera más legible y con variables incrustadas. 
*/
let str_backticks = `Esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Maikel";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantilla HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Esto es un parrafo</p>
</html>
`;
console.log(plantilla);

//// Introduccion de variables en html
let libros = [
    "Empieza por el por qué",
    "El monje que vendio su Ferrari",
    "El poder del ahora",
];

/* En resumen, la elección entre comillas simples, comillas dobles y backticks depende de las necesidades específicas de tu código. 
    Si estás creando un string estático sin necesidad de incluir variables o expresiones, las comillas simples o dobles son suficientes. 
    Sin embargo, si necesitas mayor flexibilidad, como la interpolación de variables o la creación de plantillas HTML, los backticks 
    son la elección más conveniente. */
