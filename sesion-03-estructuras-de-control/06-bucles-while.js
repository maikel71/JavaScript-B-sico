// Bucles While

/* El bucle while se usa cuando no sabes cuántas veces quieres que se repita el ciclo, o cuando quieres que el ciclo se repita hasta 
    que una cierta condición deje de cumplirse. El bucle while tiene la siguiente estructura:

    while (condicion) {
        
    }

    La condición es la parte donde se evalúa una expresión lógica que determina si el bucle debe continuar o no.
*/

/* Por ejemplo, en tu código, la condición i < max significa que el bucle se repetirá mientras el valor de i sea menor que el valor de max. */

/* A diferencia del bucle for, el bucle while no tiene una parte de inicialización ni de actualización dentro de su estructura, 
    por lo que estas partes deben estar declaradas antes o dentro del bucle, respectivamente. 
    Por ejemplo, en tu código, la variable i se declara y se asigna el valor 0 antes del bucle, y la actualización i++ se hace dentro del bucle. */

let i = 0; // Declaracion e inicializacion de la variable i let i = 0;
let max = 10; // Declaracion e inicializacion de la variable max let max = 10;

// Condicion: se evalua si i es menor que max
while (i < max) {
    console.log(i); // Codigo: se muestra el valor de i en la consola console.log(i);  // La salida de este código sería: 0 1 2 3 4 5 6 7 8 9
    i++; // Actualizacion: se incrementa el valor de i en 1 i++;
}

/* Como puedes ver, el bucle se repite 10 veces, desde i = 0 hasta i = 9, y muestra el valor de i en cada iteración. */

/* ------------------------------------------------------------------------ */

// Do...while
/* El bucle while también tiene una variante llamada bucle do…while, que se diferencia en que el código se ejecuta al menos una vez, 
    antes de evaluar la condición. El bucle do…while tiene la siguiente estructura:

    do {
        
    } while (condicion);

*/

/* El bucle do...while es una estructura de control en JavaScript que ejecuta un bloque de código al menos una vez, 
    y luego continúa ejecutándolo siempre que se cumpla una condición específica.  */

/* 1. Inicializamos dos variables, j con el valor 15 y max2 con el valor 10. */
let j = 15;
let max2 = 10;

/* 2. Luego, entramos en el bucle do...while. Esto significa que el bloque de código entre las llaves {} se ejecutará al menos una vez, sin importar la condición. */
do {
    /* 3. Dentro del bloque, encontramos la línea console.log("Estoy en el do while");. Esto simplemente imprime el mensaje "Estoy en el do while" en la consola. */
    console.log("Estoy en el do while");
} while (
    j < max2
); /* Después de ejecutar el código dentro del bucle, se verifica la condición j < max2. 
                        En este caso, j es 15 y max2 es 10. Como la condición es falsa (15 no es menor que 10), el bucle do...while se detiene y finaliza. */

/* Es importante destacar que, a diferencia de un bucle while estándar, que primero verifica 
    la condición y luego ejecuta el código, el bucle do...while ejecuta el código al menos 
    una vez antes de verificar la condición. Esto garantiza que el bloque de código dentro 
    del do...while se ejecute al menos una vez, independientemente de la condición. 
    En este caso, el mensaje se mostrará una sola vez en la consola y luego el bucle se 
    detendrá porque la condición no se cumple. */
