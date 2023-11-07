// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

/* El bucle for escrito recorre la lista de números del 1 al 8 y ejecuta el código dentro de las llaves para cada elemento de la lista. 
    Sin embargo, hay dos palabras clave que modifican el comportamiento normal del bucle: continue y break. */
for (let i = 0; i < lista.length; i++) {
    /* La palabra clave continue se usa para saltar una iteración del bucle y pasar a la siguiente. 
        En el código, se puso una condición if que dice que si el elemento de la lista es igual a 3, 
        se debe usar continue. Esto significa que cuando el bucle llega al número 3, no ejecuta 
        el resto del código dentro de las llaves, sino que salta directamente al número 4. 
        Por eso, no se imprime el número 3 ni las variables j y k cuando i es igual a 3. */
    if (lista[i] === 3) {
        continue;
    }

    let j = 50;
    const k = 100;

    console.log(lista[i]);
    console.log(j);
    console.log(k);

    /* La palabra clave break se usa para terminar el bucle por completo y salir de él. 
        En el código, se puso otra condición if que dice que si el elemento de la lista es mayor que 5, se debe usar break. 
        Esto significa que cuando el bucle llega al número 6, no ejecuta el resto del código dentro de las llaves, 
        sino que sale del bucle for y continúa con el código que sigue después. Por eso, no se imprime ningún número 
        ni las variables j y k cuando i es mayor que 5. */
    if (lista[i] > 5) {
        break;
    }

    /* - Pero aqui en el break la lista tiene los numeros 7 y 8, esos no son numeros mayores que 5? */

    /* + Sí, la lista tiene los números 7 y 8, pero el bucle for no los recorre porque se sale antes con el break. 
        El break no solo termina la iteración actual del bucle, sino que también evita que se ejecuten las siguientes. 
        Por eso, cuando el bucle llega al número 6, se cumple la condición if (lista[i] > 5) y se usa el break. 
        Esto hace que el bucle for se detenga y no continúe con los números 7 y 8. 
        Si quieres que el bucle for recorra toda la lista, debes quitar el break o cambiar la condición if. */

    /* - Entonces es decir cuando llega al 6 que es un numero mayor que 5 y ahi dice la condicion que cuando 
        un numero que sea mayor que 5, se detenga completamente digamos 1(no es mayor), 2(no es mayor), 
        3(no es mayor), 4(no es mayor), 5(son iguales), 6(es mayor), DETENTE Y SAL DEL BUCLE... 
        Eso es lo que hace cierto? */

    /* + Exacto, eso es lo que hace el break. Cuando el bucle for llega al 6, que es un número mayor que 5, 
        se detiene completamente y sale del bucle. No importa si hay más números en la lista, el break los ignora y termina el bucle for.  */
}

// Cuál es el ámbito de un bucle
// Se refiere al alcanze que tiene las variables declaradas que tienen dento de los bucles

/* El ámbito de un bucle se refiere al alcance que tienen las variables declaradas dentro del bucle. 
    En el código, se ha declarado tres variables: i, j y k. La variable i se declara con la palabra 
    clave let al inicio del bucle for y se usa para controlar el número de iteraciones. 
    La variable j se declara con la palabra clave let dentro del bucle for y se le asigna el valor 50. 
    La variable k se declara con la palabra clave const dentro del bucle for y se le asigna el valor 100. */

console.log(k);
console.log(i);
console.log(j);

/* Las variables declaradas con let o const tienen un ámbito de bloque, lo que significa que solo existen 
    dentro del bloque de código donde se declaran. Un bloque de código es una sección delimitada por llaves, 
    como el bucle for o las condiciones if. Por lo tanto, las variables i, j y k solo existen dentro del 
    bucle for y no se pueden acceder desde fuera. Si intentas imprimir las variables i, j o k después del 
    bucle for, obtendrás un error de referencia, porque esas variables no están definidas fuera del bucle. */
