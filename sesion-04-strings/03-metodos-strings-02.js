// Metodos de cadena de texto (parte 2)
let input = "ARIes";
let db = "aries";

// toLowerCase() - toUpperCase()
/* toLowerCase(): Convierte todos los caracteres de la cadena a minúsculas. */
console.log(input.toLowerCase()); // 'aries'

/* toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas. */
console.log(input.toUpperCase()); // 'ARIES'

/* En este ejemplo, se compara la igualdad de las cadenas después de convertirlas tanto a minúsculas como a mayúsculas. */
console.log(input.toLowerCase() === db.toLowerCase()); // true
console.log(input.toUpperCase() === db.toUpperCase()); // true

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y soy la segunda cadena.";

/* concat(): Combina dos o más cadenas. */
console.log(str_1.concat(" ", str_2)); // Hola soy la primera cadena. Y soy la segunda cadena.

/* La concatenación también puede hacerse utilizando el operador + */
console.log(str_1 + " " + str_2); // Hola soy la primera cadena. Y soy la segunda cadena.

/* mediante interpolación de cadenas con backticks. 

    Los "backticks" se refieren a los acentos graves ( ` ` ), también conocidos como comillas invertidas. 
*/
console.log(`${str_1} ${str_2}`); // Hola soy la primera cadena. Y soy la segunda cadena.

// Eliminar espcacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   ";
console.log(str_3.length); // 48

// trim()
/* trim(): Elimina espacios en blanco al inicio y al final de la cadena. */
console.log(str_3.trim().length); // 41

/* trimStart(): Elimina espacios en blanco solo al inicio de la cadena. */
console.log(str_3.trimStart().length); // 44

/* trimEnd(): Elimina espacios en blanco solo al final de la cadena. */
console.log(str_3.trimEnd().length); // 45

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";

/* charAt(index): Devuelve el carácter en la posición especificada. */
console.log(str_4.charAt(5)); // s

/* También puedes acceder directamente al carácter utilizando la notación de corchetes ([]). */
console.log(str_4[5]); // s

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 =
    "Hola soy Maikel y me gusta el baile. Mi nombre es Maikel y mi apellido Gonzalez";

/* indexOf(substring): Devuelve la posición del primer carácter de la primera ocurrencia del substring. Retorna -1 si no se encuentra. */
console.log(str_5.indexOf("Maikel")); // 9
console.log(str_5.charAt(9)); // M

/* lastIndexOf(substring): Devuelve la posición del primer carácter de la última ocurrencia del substring. Retorna -1 si no se encuentra. */
console.log(str_5.lastIndexOf("Maikel")); // 50
