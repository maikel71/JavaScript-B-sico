// Etiquetas en los bucles
/* Las etiquetas en los bucles en JS son una forma de nombrar un bucle para poder referirse a él desde otras partes del código. 
    Por ejemplo, puedes usar una etiqueta para identificar un bucle y luego usar las declaraciones break o continue para 
    indicar si un programa debe interrumpir el bucle o continuar su ejecución */

let unidades = 0;
let decenas = 0;

/* Se ha usado dos etiquetas: bucleDecenas y bucleUnidades. Estas etiquetas están asociadas a los bucles while 
    que se usa para generar números de dos dígitos. El bucleDecenas se ejecuta hasta que la variable decenas 
    sea igual a 2, y el bucleUnidades se ejecuta hasta que la variable unidades sea igual a 10.  */
/* Cada vez que se cumple una de estas condiciones, se usa la declaración break con la etiqueta correspondiente 
    para salir del bucle. Por ejemplo, break bucleUnidades significa que se termina el bucle while que tiene 
    la etiqueta bucleUnidades y se pasa al siguiente código. */

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++; // unidades = unidades + 1
        if (unidades === 10) {
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas === 2) {
            break bucleDecenas;
        }
    }
    decenas++; // decenas = decenas + 1
}
console.log("Ya hemos terminado");

/* EXPLICACION DEL CODIGO */

/* Lo que hace el código es generar números de dos dígitos usando dos bucles while anidados. 
    El bucle externo se encarga de las decenas y el bucle interno se encarga de las unidades. 
    Cada bucle tiene una etiqueta para poder referirse a él desde dentro del otro bucle.

    El código empieza con las variables unidades y decenas igual a 0. Luego entra en el 
    bucle while que tiene la etiqueta bucleDecenas. Este bucle se ejecuta mientras la condición 
    sea true, es decir, siempre, a menos que se use la declaración break para salir de él.

    Dentro del bucle bucleDecenas, se entra en el bucle while que tiene la etiqueta bucleUnidades. 
    Este bucle también se ejecuta mientras la condición sea true, es decir, siempre, a menos 
    que se use la declaración break para salir de él.

    Dentro del bucle bucleUnidades, se imprime en la consola el número actual, que es la 
    concatenación de las variables decenas y unidades. Por ejemplo, si decenas es 0 y 
    unidades es 0, se imprime 00. Si decenas es 1 y unidades es 5, se imprime 15.

    Luego se incrementa la variable unidades en 1, usando la expresión unidades++. 
    Esto significa que unidades pasa a valer 1 más de lo que valía antes. Por ejemplo, 
    si unidades era 0, ahora es 1. Si unidades era 9, ahora es 10.

    Después se comprueba si unidades es igual a 10, usando la expresión 
    if (unidades === 10). Si es así, se hace lo siguiente:

    - Se asigna el valor 0 a la variable unidades, usando la expresión unidades = 0. 
        Esto significa que unidades vuelve a empezar desde 0.
    - Se usa la declaración break con la etiqueta bucleUnidades, usando la expresión break bucleUnidades. 
        Esto significa que se sale del bucle while que tiene la etiqueta bucleUnidades y se pasa al siguiente código.

    Si unidades no es igual a 10, se salta este bloque de código y se vuelve al principio del bucle bucleUnidades.

    Después de salir del bucle bucleUnidades, se comprueba si decenas es igual a 2, usando la expresión if (decenas === 2). 
    Si es así, se usa la declaración break con la etiqueta bucleDecenas, usando la expresión break bucleDecenas. 
    Esto significa que se sale del bucle while que tiene la etiqueta bucleDecenas y se pasa al siguiente código.

    Si decenas no es igual a 2, se salta este bloque de código y se incrementa la variable decenas en 1, usando la expresión decenas++. 
    Esto significa que decenas pasa a valer 1 más de lo que valía antes. Por ejemplo, si decenas era 0, ahora es 1. Si decenas era 1, ahora es 2.

    Después de incrementar decenas, se vuelve al principio del bucle bucleDecenas y se repite todo el proceso.

    El código termina cuando se sale del bucle bucleDecenas, ya sea porque decenas es igual a 2 o porque el usuario interrumpe el programa. 
    Entonces se imprime en la consola el mensaje "Ya hemos terminado". */
