// Operador .valueOf - Obtener valores numéricos a partir de literales
/*  Este método devuelve el valor primitivo de un objeto Number. Por ejemplo, si creas un objeto Number con el constructor new Number(3), 
    obtienes un objeto envolvente que contiene el valor 3. Pero si quieres usar ese valor en una operación aritmética, necesitas extraer 
    el valor primitivo con el método .valueOf(). En el código, se muestra que a es un número primitivo (2) y b es un objeto Number (3). 
    Al sumarlos, JavaScript los convierte automáticamente a números primitivos, por lo que el resultado es 5. Pero también puedes usar 
    el método .valueOf() para obtener el mismo resultado. Lo mismo ocurre con el objeto String str, que contiene el valor “Hola soy un String”. 
    Si quieres obtener el valor primitivo, puedes usar el método .valueOf(). */
let a = 2;
let b = new Number(3);

console.log(a); // 2
console.log(b); // Number 3 {}
console.log(a + b); // 5
console.log(a.valueOf() + b.valueOf()); // 5

console.log(b.valueOf()); // 3

let str = new String("Hola soy un String");
console.log(str); /* String 'Hola soy un String' { [Iterator] 
0: 'H',
1: 'o',
2: 'l',
3: 'a',
4: ' ',
5: 's',
6: 'o',
7: 'y',
8: ' ',
9: 'u',
10: 'n',
11: ' ',
12: 'S',
13: 't',
14: 'r',
15: 'i',
16: 'n',
17: 'g' }*/
console.log(str.valueOf()); // Hola soy un String

/* ---------------------------------------------------------------------------------- */

// NaN (Not a Number) - Infinity
/* Estos son valores especiales que representan casos en los que una operación numérica no tiene sentido o produce un resultado infinito. 
    Por ejemplo, si intentas convertir un string que no es un número válido, como “adios”, a un número, obtienes NaN. Puedes usar la 
    función isNaN() para comprobar si un valor es NaN. Si intentas dividir un número por cero, obtienes Infinity, que representa un 
    valor infinitamente grande. También puedes obtener Infinity si divides un número por null, que se convierte a cero. */
let n = Number("adios");
console.log(n); // NaN
console.log(isNaN(n)); // true

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); // Infinity

let divisor_2 = null;
console.log(numerador / divisor_2); // Infinity

/* ---------------------------------------------------------------------------------- */

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
/*  Estas son funciones que te permiten convertir un string que contiene un número a un valor numérico. La función Number() intenta convertir 
    el string a un número de cualquier tipo (entero, decimal, hexadecimal, etc.). La función parseInt() intenta convertir el string a un 
    número entero, ignorando cualquier parte decimal o no numérica. La función parseFloat() intenta convertir el string a un número decimal, 
    ignorando cualquier parte no numérica. En el código, se muestra que numero es un string que contiene el valor “5.89”. Si lo sumas con 
    otro número, como num2, obtienes un error de concepto, porque JavaScript concatena los strings en lugar de sumarlos. Pero si usas las 
    funciones de conversión, puedes obtener el resultado correcto. También se muestra cómo usar parseInt() para convertir un número 
    hexadecimal (base 16) a un número decimal (base 10). */
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero); // string
console.log(numero + num2); // Error de concepto '5.8917.2'

console.log(Number(numero) + num2); // 23.09

console.log(parseInt(numero)); // 5
console.log(parseFloat(numero)); // 5.89

/* ---------------------------------------------------------------------------------- */

// Números hexadecimales (base 16)
/* Estos son números que usan 16 dígitos para representar los valores, en lugar de 10. Los dígitos son 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E y F. 
    Para indicar que un número es hexadecimal, se usa el prefijo 0x. Por ejemplo, el número hexadecimal 0x3a5b7 equivale al número decimal 239031. 
    Puedes usar la función parseInt() para convertir un número hexadecimal a decimal, pasando el segundo argumento como 16. */
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16)); //239031

/* ---------------------------------------------------------------------------------- */

// Obtener los valores máximo y mínimo en JavaScript
/* Estas son propiedades del objeto Number que te indican los límites de los valores numéricos que puedes representar en JavaScript. Number.EPSILON es 
    el intervalo más pequeño entre dos números representables, es decir, la precisión mínima que puedes tener. Number.MIN_VALUE es el número más pequeño 
    representable, que es el número positivo más cercano a cero sin llegar a ser cero. Number.MAX_VALUE es el número más grande representable, que es el 
    límite superior de los números finitos. Si intentas representar un número mayor que Number.MAX_VALUE, obtienes Infinity. */
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); // 2.220446049250313e-16
console.log(min_valor_JS); // 5e-324
console.log(max_valor_JS); // 1.7976931348623157e+308
