// Bifurcaciones if else y switch
/* Las bifurcaciones if else y switch en JS son formas de controlar el flujo de un programa según ciertas condiciones. 
    Ambas estructuras evalúan una expresión y ejecutan un bloque de código dependiendo del resultado. 
    La diferencia principal es que el if else usa una serie de condiciones separadas por else if, 
    mientras que el switch usa una sola expresión y compara su valor con varios casos.*/

// Bifurcaciones if ... else

let saldo = 50;
let efectivo = 120;

/* Este código evalúa si el efectivo es menor que el saldo, y si es así, imprime un mensaje. Si no, no hace nada. */
if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
}

/* Este código hace lo mismo que el anterior, pero además tiene una cláusula else que se ejecuta si la condición es falsa. En este caso, imprime otro mensaje. */
if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
} else {
    console.log("Saldo insuficiente");
}
