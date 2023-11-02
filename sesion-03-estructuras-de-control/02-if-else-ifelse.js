// If else + if else

/* Este código evalúa la nota con varias condiciones encadenadas por else if. 
    Solo se ejecuta el bloque de código que corresponde a la primera condición verdadera. 
    Si ninguna condición se cumple, se ejecuta el bloque else final. */

let nota = 5;

if (nota === 5) {
    console.log("En hora buena, has obtenido un sobresaliente");
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrias haberlo hecho mejor");
} else if (nota === 3) {
    console.log("Has obtenido un suficiente");
} else if (nota === 2) {
    console.log("No has aprobado por poco");
} else if (nota === 1) {
    console.log(
        "No has estudiado nada, trabaja un poquito más para la próxima"
    );
} else {
    console.log("Error, introduce una nota entre el 1 y el 5");
}

/* Las bifurcaciones if else y switch son formas de tomar decisiones en un programa según el valor de una expresión. 
    Por ejemplo, si quieres hacer algo diferente dependiendo del día de la semana, puedes usar una bifurcación if else o un switch. */

// Bifurcación if else

/* Esta bifurcación evalúa el valor de la variable dia y compara con cada una de las opciones posibles. 
    Si hay una coincidencia, se ejecuta el bloque de código correspondiente y se termina la bifurcación. 
    Si no hay ninguna coincidencia, se ejecuta el bloque else final. */

let dia = "lunes";

if (dia === "lunes") {
    console.log("Hoy es lunes, toca trabajar duro");
} else if (dia === "martes") {
    console.log("Hoy es martes, ya queda menos para el fin de semana");
} else if (dia === "miercoles") {
    console.log("Hoy es miércoles, estamos a mitad de semana");
} else if (dia === "jueves") {
    console.log("Hoy es jueves, casi lo logramos");
} else if (dia === "viernes") {
    console.log("Hoy es viernes, por fin llegó el día más esperado");
} else if (dia === "sabado") {
    console.log("Hoy es sábado, a disfrutar del tiempo libre");
} else if (dia === "domingo") {
    console.log("Hoy es domingo, a descansar y recargar energías");
} else {
    console.log("Error, el día no es válido");
}
