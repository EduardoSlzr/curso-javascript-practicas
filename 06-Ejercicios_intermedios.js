/* 1.-Calculadora de operaciones básicas
Crea un programa que simule una calculadora básica donde el usuario pueda elegir entre realizar una suma, 
resta, multiplicación o división con dos números proporcionados por él.
Conceptos cubiertos: Condicionales (if, else if, else), operadores aritméticos, entrada de datos.
var tipoOperacion, num1, num2, resultado;*/

tipoOperacion = prompt('Ingrese el tipo de operacion ( + , - , * , / ): ');
num1 = parseFloat(prompt('Ingrese un Numero: '));
num2 = parseFloat(prompt('Ingrese un Numero: '));

if (tipoOperacion == '+'){
    console.log(+num1, "+", num2, 'es: ' +(num1+num2));
} else if(tipoOperacion == '-'){
    console.log(+num1, '-', num2, 'es: ' +(num1-num2));
} else if(tipoOperacion == '*'){
    console.log(+num1, '*', num2, 'es: ' +(num1*num2));
} else if(tipoOperacion == '/'){
    console.log(+num1, '/', num2, 'es: ' +(num1/num2));
}

/* 2.-Contador de palabras
Escribe un programa que reciba una cadena de texto e imprima cuántas palabras contiene. Para simplificar,
 puedes contar las palabras separadas por espacios.
Conceptos cubiertos: Métodos de cadenas de texto, bucles (for o while), operaciones con strings.*/

var textoUsuario = prompt('Ingrese su texto: ');
var palabras = textoUsuario.split(' ');

numeroPalabras = palabras.length;
console.log( 'la cantidad de palabras son: ' +numeroPalabras);

/* 3.-Mayor de tres números
Crea un programa que reciba tres números del usuario y determine cuál es el mayor usando varias sentencias 
if anidadas.
Conceptos cubiertos: Condicionales (if, else if, else), operadores de comparación.*/

var num1, num2, num3;

num1 = prompt('Ingrese un numero: ');
num2 = prompt('Ingrese un numero: ');
num3 = prompt('Ingrese un numero: ');

if(num1>num2){
    if(num1>num3){
        console.log('el 1er numero ' +num1, ' es el numero mayor');
    }else{
        console.log(num3, '3er es el numero mayor');
    }
}else{
    if(num2>num1){
        if(num2>num3){
            console.log('el 2do numero ' +num2, ' es el numero mayor');
        }else{
            console.log(+num3, '3er es el numero mayor');
        }
    }
}

/* 4.-Adivina el número
Crea un juego simple en el que la computadora elija un número entre 1 y 100 (puedes usar Math.random() 
para generar el número), y el jugador tiene que adivinarlo. El programa le indicará si su número 
es mayor o menor que el elegido por la computadora.
Conceptos cubiertos: Bucles while, condicionales, generación de números aleatorios.*/


// INDICA EL NUMERO ALEATORIO MULTIPLICADO POR 10 PARA QUE NO DE EN DECIMALES
var numeroAleatorio = (Math.floor((Math.random() * 10))); 
var numeroUsusario = prompt('Ingrese el numero del 1 - 10: ');

if (numeroAleatorio == numeroUsusario ){
    console.log('GANASTE');
    } else {
    console.log('SIGUE INTENTANDO');
}

console.log('el numero ingresado fue: ' +numeroUsusario);

console.log('el numero generado por la maquina fue: ' +numeroAleatorio);