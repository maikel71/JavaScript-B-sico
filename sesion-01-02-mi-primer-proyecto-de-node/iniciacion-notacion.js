// Notacion
/* La notación es la forma de representar los datos y las operaciones en un lenguaje de programación. 
    En JavaScript, hay diferentes tipos de notación que se usan para diferentes propósitos. 
    Algunos ejemplos de notación son: */



// ;   ==> Delimitar el final de una línea
/* El punto y coma (;) se usa para delimitar el final de una línea de código. 
    Esto le indica al intérprete de JavaScript que esa línea es una instrucción completa y que puede pasar a la siguiente. 
    El punto y coma es opcional en la mayoría de los casos, pero se recomienda usarlo para evitar errores o ambigüedades. */
const b = 4;
b + 4;

// . ==> Se utiliza en los objetos para acceder a los atributos
/* El punto (.) se usa para acceder a los atributos de un objeto. 
    Un atributo es una propiedad o un método que pertenece a un objeto. 
    Por ejemplo, si tienes un objeto llamado movil que tiene una propiedad llamada anchura, 
    puedes usar movil.anchura para obtener el valor de esa propiedad. */
// movil.anchura

// [] ==> listas, arreglos o arrays
/* Los corchetes ([]) se usan para crear y acceder a los arreglos. 
    Un arreglo es una colección ordenada de valores que se pueden acceder mediante un índice numérico. 
    Por ejemplo, si tienes un arreglo llamado ar que tiene cuatro elementos, 
    puedes usar ar[0] para obtener el primer elemento, ar[1] para el segundo, y así sucesivamente. */
const ar = [1, 2, 3, 4]
console.log(ar[2])

// () ==> Funciones
/* Los paréntesis (()) se usan para definir y llamar a las funciones. 
    Una función es un bloque de código que se puede ejecutar varias veces con diferentes valores de entrada. 
    Por ejemplo, si tienes una función llamada suma que recibe dos parámetros a y b, 
    puedes usar suma(2, 3) para llamar a la función con los valores 2 y 3 como argumentos. */
function suma(a, b) {
    // Se escribre la funcion
}

// {} ==> Llaves para objetos, funciones y estructuras de control
/* Las llaves ({}) se usan para crear y acceder a los objetos, para definir el cuerpo de las funciones y para delimitar los bloques de las estructuras de control. 
    Un objeto es una colección no ordenada de pares clave-valor que se pueden acceder mediante un nombre o una cadena. 
    Por ejemplo, si tienes un objeto llamado movil que tiene dos propiedades anchura y altura, puedes usar {anchura: 5, altura: 10} 
    para crear el objeto literalmente, o usar {} para crear un objeto vacío y luego asignarle las propiedades con el operador =.  */
const movil = {
    anchura: 5,
    altura: 10
}

//estructuras de control
/* Una estructura de control es una sentencia que altera el flujo normal de ejecución del código según una condición o un bucle. 
    Por ejemplo, si tienes una estructura de control llamada if que evalúa una condición y ejecuta un bloque de código si la condición es verdadera, 
    puedes usar if (true) { ... } para escribir la estructura, donde lo que hay entre llaves es el bloque de código que se ejecuta si la condición es verdadera. */
if (true) {
    // Todo lo que haya entre llaves

    const constante2 = "for"
}