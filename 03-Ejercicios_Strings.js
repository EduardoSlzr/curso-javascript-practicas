const producto1 = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles

// Ejemplo con Pulgadas
const producto3 = "Monitor 24\"";
console.log(producto3);

// Algunos métodos existentes en los strings o cadenas de Texto:

const producto4 = 'Monitor 20 Pulgadas ';
const precio = '30 USD';

console.log(producto4.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y 
// es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto1.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto1.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto1.includes('Monitor')); //"True" Conocer si un texto existe
console.log(producto1.includes('monitor')); // "False" Conocer si un texto existe


// concatenar o unir 2 textos o variables:
const producto5 = 'Monitor 20 Pulgadas ';
const precio2 = ' 30 USD';

console.log(producto5.concat('En Descuento')); // Concactenar un string
console.log(producto5.concat(precio2)); // Concactenar una variable

// Otras formas de concatenar:
console.log(producto5 + precio2); 
console.log(producto5 +  " Con un precio de " +precio2); 
console.log("El Producto" + producto5 +  " tiene un precio de" + precio2); // Esta forma se puede complicar
console.log("El Producto" , producto5 ,  " tiene un precio de",  precio2); // Otra forma

// ES6 trajo una mejor forma de concatenar variables llamado Template String o template literal

console.log(`El Producto ${producto5} tiene un precio de ${precio2}`);


//METODOS PARA ELIMINAR ESPACIOS EN BLANCO AL INICIO Y FINAL DEL STRING
const producto = '        Monitor 20 Pulgadas      '; 

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio

// Eliminar el final
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd() ); // Cortar en ambas direcciones

// Un método (que ya tiene rato ) es trim que hace lo mismo
console.log(producto.trim().length);



//METODOS PARA CORTAR STRINGS

// Replace 
const producto9 = 'Monitor 20 Pulgadas';
console.log(producto9.replace("20", "24"));
console.log(producto9.replace('Pulgadas', '"'));

// Slice te va a permitir extraer una parte de una cadena
console.log( producto9.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto9.slice(8));// Cortar desde el 8 hasta el fin
console.log(producto9.slice(2, 10)); // cortar desde 2 hasta el 10

console.log(producto9.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring
console.log( producto9.substring(0, 10) );

console.log( producto9.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:

const nombre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));


//METODO PARA REPETIR TEXTO
// Repeat Te va a permitir repetir una cadena de texto:

const producto6 = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)

console.log(producto6.repeat(3)); // Monitor 24 pulgadas Monitor 24 pulgadas Monitor 24 pulgadas 
console.log(producto6.repeat(2.2)); // va a redondear a entero ELIMINANDO EL DECIMAL (Monitor 24 pulgadas Monitor 24 pulgadas )
console.log(`${producto6} ${texto} !!!`);
 

// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));//['Estoy', 'aprendiendo', 'Javascript', 'Moderno']

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", ")); //['Leer', 'caminar', 'escuchar musica', 'escribir', 'aprender a programar']




// .toUpperCase() te va a permitir cambiar un texto a todo mayusculas
const producto11 = 'Monitor 24 pulgadas ';
console.log(producto11.toUpperCase() );

// .toLowerCase()
console.log(producto11.toLowerCase() );

const correo =  "EDUARDO@GMAIL.COM";
console.log(correo.toLocaleLowerCase());

// .toString()
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());