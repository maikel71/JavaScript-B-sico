// Numbers

// Declaración de variables numéricas (enteros y con decimales)
let a = 5;
console.log(a); // 5

let b = 0.1;
console.log(b); // 0.1
/* - Se declaran dos variables, a y b, una con un valor entero (5) y otra con un valor decimal (0.1).
    - Se imprime cada variable en la consola. */

// Precisión
/* Se declara una variable c con un valor decimal (0.2). */
let c = 0.2;
/* Se imprime la suma de b y c en la consola. */
console.log(b + c); // 0.30000000000000004
/* El resultado (0.30000000000000004) muestra un problema común con los números de punto flotante en la 
    representación interna de JavaScript, donde ciertos cálculos pueden llevar a pequeños errores de precisión 
    debido a la forma en que se almacenan los números en la computadora. */
/* ¿Por qué dio ese resultado? */
/* En la programación, los números con decimales se almacenan internamente en el formato binario. 
    Algunos números decimales no pueden representarse exactamente en binario, lo que conduce a pequeños errores de redondeo.

    En este código, se esta sumando 0.1 y 0.2, dos números decimales. Estos números no pueden representarse con precisión en binario, 
    y la suma de ellos también lleva a un número que no puede representarse exactamente.

    Cuando se imprime este resultado, JavaScript redondea el número para mostrarlo de manera más legible. 
    Sin embargo, el valor exacto en la representación interna binaria puede tener una ligera discrepancia.

    En el caso específico de 0.1 + 0.2, la suma interna en binario es algo como 0.300000000000000039. Al imprimirlo, se redondea a 0.30000000000000004.

    Para obtener resultados más predecibles o redondeados, puedes usar funciones como Math.round para 
    ajustar el número a una cantidad específica de decimales, como se hace en tu código. 
    Esto es solo un truco para mejorar la precisión en la presentación de resultados, 
    pero ten en cuenta que la representación interna en binario siempre tendrá limitaciones 
    cuando trabajas con números de punto flotante en cualquier lenguaje de programación. */

// Pequeño truco para obtener valores "reales"
console.log(Math.round((b + c) * 100) / 100); // 0.3
/* - Math.round(number): Redondea el número al entero más cercano.
    - (b + c) * 100: Multiplica la suma de b y c por 100 para mover el punto decimal dos lugares hacia la derecha.
    - Math.round((b + c) * 100): Redondea el resultado al entero más cercano.
    - / 100: Divide el resultado por 100 para devolver el punto decimal a su posición original.
    - En este caso, se aplica este truco para obtener un valor redondeado y más preciso (0.3) en lugar del valor inexacto obtenido por la simple suma de b y c.
*/
