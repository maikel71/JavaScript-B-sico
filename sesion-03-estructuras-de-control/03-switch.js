// Setencias Switch

/* Este código hace lo mismo que el anterior, pero usando una estructura switch. 
    El switch evalúa la nota y compara su valor con cada caso. 
    Si hay una coincidencia, se ejecuta el bloque de código asociado y se sale del switch con la instrucción break. 
    Si no hay ninguna coincidencia, se ejecuta el caso default. */

let nota = 3;

switch (nota) {
    case 5:
        console.log("En hora buena, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrias haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log(
            "No has estudiado nada, trabaja un poquito más para la próxima"
        );
        break;

    default:
        console.log("Error");
        break;
}

// Bifurcación switch
/* Esta bifurcación hace lo mismo que la anterior, pero usando una estructura switch. 
    El switch evalúa el valor de la variable dia y compara con cada uno de los casos. 
    Si hay una coincidencia, se ejecuta el bloque de código asociado y se sale del switch con la instrucción break. 
    Si no hay ninguna coincidencia, se ejecuta el caso default. */

let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Hoy es lunes, toca trabajar duro");
        break;
    case "martes":
        console.log("Hoy es martes, ya queda menos para el fin de semana");
        break;
    case "miercoles":
        console.log("Hoy es miércoles, estamos a mitad de semana");
        break;
    case "jueves":
        console.log("Hoy es jueves, casi lo logramos");
        break;
    case "viernes":
        console.log("Hoy es viernes, por fin llegó el día más esperado");
        break;
    case "sabado":
        console.log("Hoy es sábado, a disfrutar del tiempo libre");
        break;
    case "domingo":
        console.log("Hoy es domingo, a descansar y recargar energías");
        break;
    default:
        console.log("Error, el día no es válido");
        break;
}

/* Como puedes ver, las bifurcaciones if else y switch son similares en su funcionamiento, pero tienen algunas diferencias en su sintaxis y su uso. 
    Algunas ventajas y desventajas de cada una son: 
    - El if else es más flexible y puede evaluar condiciones más complejas que el switch.
    - El switch es más claro y conciso cuando se trata de comparar un valor con varias opciones fijas.
    - El if else puede tener errores si se olvida poner un else o un return al final de cada condición.
    - El switch puede tener errores si se olvida poner un break al final de cada caso.
*/

/* En general, se recomienda usar el switch cuando se tiene un número limitado de opciones posibles y se quiere evitar repetir la misma expresión varias veces. 
    En cambio, se recomienda usar el if else cuando se tiene una condición más compleja o variable que no se puede expresar con un solo valor. */
