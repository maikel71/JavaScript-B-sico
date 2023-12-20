// Metodos mas utilizados con cadenas de caracteres

// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);
/* Este fragmento imprime en la consola la longitud (número de caracteres) del string almacenado en la variable str. */

//  Obtener partes de cadenas de caracteres
// slice()  substring()  substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);
/* slice(start, end): Devuelve una porción de la cadena desde el índice start hasta el índice end (sin incluir end). */

let substring_str = str.substring(5, 10);
console.log(substring_str);
/* substring(start, end): Similar a slice, pero no acepta índices negativos. */

let substr_str = str.substr(5, 10);
console.log(substr_str);
/* substr(start, length): Devuelve una porción de la cadena comenzando desde el índice start y tomando una longitud específica. */

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Maikel";
console.log(cadena);

// Al utilizaar strings sólo reemplaza la primera instancia
console.log(cadena.replace("Maikel", "Frank"));

/* replace(oldValue, newValue): Reemplaza la primera ocurrencia de oldValue con newValue en la cadena. */

//Reemplazar todas las instancias usando expresiones regulares
let texto_largo =
    "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

// Al utilizaar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace("los", "cinco"));
/* La primera llamada a replace reemplaza solo la primera ocurrencia de "los" con "cinco". */

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));
/* La segunda llamada utiliza una expresión regular con la marca /g, que significa global, y reemplaza todas las instancias de "los" con "cinco". */
