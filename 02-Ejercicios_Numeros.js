// Operaciones
let numero1 = 2;
let numero2 = 2;
let resultado;

// Suma
resultado = numero1 + numero2;
console.log(resultado);

// Resta
resultado = numero1 - numero2;
console.log(resultado);

// Mult
resultado = numero1 * numero2;
console.log(resultado);

// Division
resultado = numero1 / numero2;
console.log(resultado);

// Modulo
resultado = numero1 % numero2;
console.log(resultado);

// Pi
resultado = Math.PI;
console.log(resultado);

// redondeo
resultado = Math.round(2.5);
console.log(resultado);
 
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
console.log(resultado);
 
// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
 
// Abssoluto
resultado = Math.abs(-300);
console.log(resultado);
 
// Potencia
resultado = Math.pow(8, 3);
console.log(resultado);
 
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultado);
 
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(resultado);
 
// Aleatorio
resultado = Math.random();
console.log(resultado);
 
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );
console.log(resultado);
 

// Ir incrementando un valor de 1 en 1 o en determinada cantidad

let puntaje = 5;

puntaje++;
console.log(puntaje);

puntaje--;
console.log(puntaje);
 
++puntaje;
console.log(puntaje);
 
--puntaje;
console.log(puntaje);
 

puntaje += 3;
console.log(puntaje);
 
puntaje -= 3;
console.log(puntaje);
 


//convertir a números
const numero_1 = "20";
const numero_2 = "20.2";
const numero_3 = "Uno";
const numero_4 = 20;

console.log(numero_1);

console.log(Number.parseInt("20")); // 20 
console.log(Number.parseInt("20.2")); // 20  (elimina los decimales)
console.log(Number.parseInt("Uno")); // NaN  (no empieza con un número)
console.log(Number.parseInt("123abc")); // 123  (ignora lo que sigue después del número)
console.log(Number.parseInt("abc123")); // NaN  (no empieza con un número)


// Convertir de Strings a Números flotantes o Enteros
console.log(Number.parseInt(numero_1)); // Convertir de String a Número
console.log(Number.parseFloat(numero_2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero_3)); 

// Revisar si un número es entero
console.log(Number.isInteger(numero_4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero_3) ); //

// Convertir String a numero
console.log(numero_4.toString());




const numeros1 = 20;
const numeros2 = "20";
const numeros3 = 30;

// Operador Mayor a 
console.log( numeros1 > numeros3 );
console.log( numeros3 > numeros1 );


// Operador Menor que
console.log(numeros3 < numeros1);

// Revisar si 2 valores son iguales o diferentes
console.log(numeros1 == numeros3);
console.log(numeros1 == numeros2);


// Typeof
console.log( typeof numeros1 );
console.log( typeof numeros2 );

// Operador estricto (revisa valor y tipo de dato)
console.log(numeros1 === numeros2 );

// Diferente a 

console.log(numeros1 != numeros3);
console.log(numeros1 != numeros2);
console.log(numeros1 !== numeros2);