//Tipado en JS y tipos primitivos
/*
    Tipado en JS y tipos primitivos se refiere a cómo JavaScript maneja los diferentes tipos de datos que se pueden usar en el lenguaje. 
    JavaScript es un lenguaje de tipado dinámico, lo que significa que no se necesita declarar el tipo de una variable antes de asignarle un valor. 
    El tipo de una variable se determina automáticamente por el valor que tiene en cada momento.

    Los tipos primitivos en JavaScript son aquellos valores que no son un objeto y no tienen métodos. 
    Además, los tipos primitivos son valores inmutables (no se pueden modificar). 
    Hay 7 tipos primitivos en JavaScript: string, number, bigint, boolean, undefined, symbol y null.

    - string: representa una cadena de caracteres, como “Hola” o “JavaScript”.

    - number: representa un número, ya sea entero o decimal, como 3 o 3.1416.
        También incluye el valor especial NaN (Not A Number), que indica que el valor no es un número válido.

    - bigint: representa un número entero arbitrariamente grande, como 1234567890123456789012345678901234567890n. 
        Se usa el sufijo n para indicar que es un bigint.

    - boolean: representa un valor lógico, que puede ser true (verdadero) o false (falso).

    - undefined: representa la ausencia de un valor definido. 
        Se asigna automáticamente a las variables que no se han inicializado o a las propiedades de los objetos que no existen.

    - symbol: representa un identificador único e inmutable, 
        que se puede usar como clave de un objeto o para implementar conceptos avanzados como iteradores o meta-programación.

    - null: null es un valor que se usa para indicar explícitamente que una variable no tiene ningún valor o que el valor no existe.
*/


// Tipos primitivos

/* Este código muestra algunos ejemplos de los valores primitivos que existen en el lenguaje: number, string, boolean, null y undefined. */

// number
4; // un número entero
0; // otro número entero

// string
"Hola mundo"; // una cadena de caracteres con comillas dobles
'Hola mundo'; // una cadena de caracteres con comillas simples
`Hola mundo`; // una cadena de caracteres con acentos graves

// booleanos
true;  // un valor lógico verdadero
false; // un valor lógico falso

// nulo y undefined
null;       // un valor que indica la ausencia de valor
undefined;  // un valor que indica la falta de definición de un valor

// null, undefined, false, 0 ==> Todas son Falsy
console.log(null === undefined); // false, porque null y undefined son diferentes tipos primitivos

if (null) {
    console.log("cumple") // este código no se ejecuta, porque null es un valor falsy
} else {
    console.log("no cumple") // este código se ejecuta, porque null es un valor falsy
}

/* Como puedes ver, los tipos primitivos en JavaScript son muy simples y básicos. 
    Sin embargo, el lenguaje te permite acceder a métodos y propiedades de estos valores como si fueran objetos. 
    Esto se debe a que JavaScript crea temporalmente un objeto envoltorio que provee la funcionalidad extra y luego lo destruye */

// Por ejemplo, si tienes una variable que contiene un tipo primitivo string, puedes usar el método toUpperCase() para convertirla en mayúscula:

var saludo = "hola"; // saludo es un tipo primitivo string
console.log(saludo.toUpperCase()); // HOLA

/* Lo que pasa es que JavaScript crea temporalmente un objeto String con el valor “hola” y le aplica el método toUpperCase(). 
    El resultado es una nueva cadena “HOLA” que no se asigna a la variable saludo, por lo que esta conserva su valor original. */