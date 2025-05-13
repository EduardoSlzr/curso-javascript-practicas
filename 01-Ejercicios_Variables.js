
// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero

//var 99dias; ERROR
var dias99;

var _01;
//var 01_; ERROR

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
var  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
var nombreproducto = 'Monitor 30 Pulgadas';



//Crear una variable
var Saludo = "Hola Mundo";
console.log(Saludo);

//Hacer que un usuario ingrese datos pmediante una ventana emergente
let ingresarDatos = prompt("Indica tu nombre y Apellido:");
console.log(ingresarDatos);


// Variables con var
var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando se crea la variable
var precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

var disponible;
disponible = true;

// Inicializar múltiples variables 
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)

//--------------CREAR VARIABLES CON "LET"

let juguete = "coche rojo";
juguete = "pelota azul"; 
console.log(juguete); 


//--------------CREAR VARIABLES CON "CONST"

// primero una variable con const su valor no puede ser re-asignado:
const producto = 'Monitor 30 Pulgadas';
console.log(producto);
producto = 'Monitor 23 Pulgadas';

// Por otro lado, las variables con const, deben iniciarse con un valor:
const precio;
precio = 20;
console.log(precio);

/*

¿Cuándo usar cada tipo?
•	Usa CONST cuando sabes que algo no va a cambiar nunca.
Ejemplo: Tu nombre o la cantidad de días en una semana.

•	Usa LET cuando algo puede cambiar en tu programa.
Ejemplo: La cantidad de juguetes que tienes en tu cuarto.

•	EVITA VAR, porque puede causar problemas inesperados, porque no sigue las reglas del "bloque de código" y 
a veces está disponible donde no debería estar. Por eso, ya casi no se usa.

¿Por qué?
1.	let y const son más ordenados:
Solo funcionan dentro del lugar donde los creaste (lo que llamamos "bloque de código"). 
Así, evitas problemas con cosas que se mezclan o cambian sin querer.

*/