// Declaración de variables y escritura dinámica
/*
    Declaración de variables y escritura dinámica se refiere a cómo se pueden crear y usar variables en JavaScript sin tener que especificar su tipo de antemano. 
    JavaScript es un lenguaje de tipado dinámico, lo que significa que el tipo de una variable se determina por el valor que tiene en cada momento y puede cambiar 
    durante la ejecución del programa.

    Para declarar una variable en JavaScript, se puede usar una de las tres palabras reservadas: var, let o const. 
    Cada una de estas palabras tiene sus propias características y reglas de alcance.

    - var: se usa para declarar una variable global o local en una función, pero no en un bloque. 
        El valor de una variable declarada con var puede cambiar y puede ser redeclarada.

    - let: se usa para declarar una variable local en un bloque, como un bucle o una condición. 
        El valor de una variable declarada con let puede cambiar, pero no puede ser redeclarada en el mismo bloque.

    - const: se usa para declarar una variable local en un bloque, como un bucle o una condición. 
        El valor de una variable declarada con const no puede cambiar ni ser redeclarado.
*/

/* ------------------------------------------------------------------------------------------- */

// El código tiene varias partes que explican diferentes conceptos del lenguaje. 

/* Declara tres tipos de variables: `var`, `let` y `const`. 
    Estas palabras clave se usan para crear variables que almacenan valores. 
    La diferencia entre ellas es el alcance y la reasignación. 
    El alcance se refiere a la región del código donde una variable es visible y accesible. 
    La reasignación se refiere a la posibilidad de cambiar el valor de una variable después de crearla. */

var variable;
let variableLet_;

/* - `const` crea una variable con alcance de bloque, igual que `let`, pero con la diferencia de que no puede ser reasignada. 
    Esto significa que una vez que se le asigna un valor a una variable declarada con `const`, ese valor no puede cambiar. 
    Si se intenta reasignar una variable `const`, se produce un error. */
// const constante;
const constante = "Hola soy una constante";
console.log(constante);
// constante = "Adios" // Nos da un error

/* En el primer ejemplo, se crea una variable llamada `constante` con `const` y se le asigna el valor "Hola soy una constante". 
    Luego se imprime el valor de `constante` en la consola, que es "Hola soy una constante". 
    Después, se intenta reasignar el valor de `constante` a "Adios", pero esto produce un error, porque las variables declaradas con `const` no pueden ser reasignadas. */

/* ------------------------------------------------------------------------------------------- */
/* `var` crea una variable con alcance global o de función, dependiendo de dónde se declare. 
    Esto significa que una variable declarada con `var` puede ser vista y modificada desde cualquier parte del código. 
    Además, una variable declarada con `var` puede ser reasignada tantas veces como se quiera. */
var a = 1;
console.log(a);

a = 4
console.log(a);

/* En el segundo ejemplo, se crea una variable llamada `a` con `var` y se le asigna el valor 1. 
    Luego se imprime el valor de `a` en la consola, que es 1. 
    Después, se reasigna el valor de `a` a 4 y se vuelve a imprimir en la consola, que ahora es 4. */

/* ------------------------------------------------------------------------------------------- */
/* `let` crea una variable con alcance de bloque, lo que significa que solo es visible y accesible dentro del bloque de código donde se declara. 
    Un bloque de código es una sección delimitada por llaves `{}`. Una variable declarada con `let` también puede ser reasignada, pero solo dentro de su bloque. */
let b = 3;
console.log(b);

b = 5;
console.log(b);

/* En el tercer ejemplo, se crea una variable llamada `b` con `let` y se le asigna el valor 3. 
    Luego se imprime el valor de `b` en la consola, que es 3. 
    Después, se reasigna el valor de `b` a 5 y se vuelve a imprimir en la consola, que ahora es 5. */

/* ------------------------------------------------------------------------------------------- */

// Diferencia entre var y let
/* Aqui se explica la diferencia entre `var` y `let` en términos de alcance. 
    Se usan dos ejemplos para ilustrar cómo el alcance afecta al valor y la visibilidad de las variables. */
/*
    var ==> afecta a todo el codigo
    let ==> afecta solo en el bloque en donde este siendo declarado
*/


// Ejemplo de la diferencia

//VAR
/* En el primer ejemplo, se usa un bucle `for` para iterar tres veces sobre un bloque de código. 
    Un bucle `for` es una estructura de control que permite repetir un bloque de código un 
    número determinado de veces, cambiando el valor de una variable cada vez. 
    En este caso, la variable es `i`, que empieza en 0 y termina en 2, incrementándose en 1 cada vez. 
    Dentro del bucle, se declara una variable llamada `variable` con `var` y se le asigna el valor "Soy la segunda variable". 
    Fuera del bucle, se imprime el valor de `variable` en la consola, que es "Soy la segunda variable". 
    Esto ocurre porque la variable declarada con `var` dentro del bucle tiene alcance global, 
    lo que significa que sobrescribe el valor de la variable declarada con `var` fuera del bucle, que también tiene alcance global. 
    Por lo tanto, el valor de `variable` es el mismo dentro y fuera del bucle. */
var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable);

//LET
/* En el segundo ejemplo, se usa el mismo bucle `for`, pero se declara una variable llamada `variableLet` con `let` en lugar de `var`. 
    Fuera del bucle, se imprime el valor de `variableLet` en la consola, que es "Hola soy una variable LET". 
    Esto ocurre porque la variable declarada con `let` dentro del bucle tiene alcance de bloque, lo que significa que solo es visible y accesible dentro del bucle. 
    Por lo tanto, el valor de `variableLet` dentro del bucle no afecta al valor de la variable declarada con `let` fuera del bucle, que también tiene alcance de bloque.
    Así, el valor de `variableLet` es diferente dentro y fuera del bucle. */
let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variableLet"
}

console.log(variableLet);

///////////////////////////////////////

// OPERADOR typeof
// Nos dice de que tipo es un valor 

/*  Aqui se muestra cómo usar el operador `typeof` para obtener el tipo de un valor o una variable. 
    El tipo se refiere a la naturaleza o la categoría de un valor, por ejemplo, si es un número, una cadena de texto, un booleano, etc. 
    El operador `typeof` devuelve una cadena que indica el tipo del valor o la variable que se le pasa como argumento. 
    Se usan varios ejemplos para mostrar los tipos de algunos valores y variables. */

console.log(typeof 1); // En el primer ejemplo, se usa `typeof 1`, que devuelve "number", porque 1 es un número.
console.log(typeof "1"); // En el segundo ejemplo, se usa `typeof "1"`, que devuelve "string", porque "1" es una cadena de texto.
console.log(typeof false); // En el tercer ejemplo, se usa `typeof false`, que devuelve "boolean", porque false es un booleano, que es un tipo de valor que solo puede ser verdadero o falso.
console.log(typeof null); // En el cuarto ejemplo, se usa `typeof null`, que devuelve "object", porque null es un objeto especial que representa la ausencia de valor.
console.log(typeof undefined); // En el quinto ejemplo, se usa `typeof undefined`, que devuelve "undefined", porque undefined es un valor especial que representa la falta de asignación.

// Tambien podemos pasarle variables
/* En los siguientes ejemplos, se usan variables en lugar de valores literales. 
    El operador `typeof` devuelve el tipo del valor asignado a la variable, o "undefined" si la variable no tiene ningún valor asignado o no existe. */

console.log(typeof variable);
console.log(typeof variableLet_);
console.log(typeof hola);

var num = 4;
console.log(typeof num);

num = "Hola soy num";
console.log(typeof num);

// cambiar el valor de num o de cualquier variables son de malas practicas, es un ejemplo para entender nomas sobre typeof