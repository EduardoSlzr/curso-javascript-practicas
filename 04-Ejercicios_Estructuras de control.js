
//*                 EJERCICIOS estructuras de control - sentencias IF, ELSE IF, ELSE y los operadores lógicos (&&, ||, !).  */


/* 1.- SUMA DE DOS NUMEROS:
Crea un programa que pida al usuario ingresar dos números
y luego muestre la suma de ambos en la consola.*/
var num1 = parseFloat(prompt("ingrese primer digito:"));
var num2 = parseFloat(prompt("ingrese segundo digito:"));
    console.log('la suma de: '+num1+' y '+num2+' es: ' +(num1+num2));



/*  2.- NUMERO PAR O IMPAR
Escribe un programa que pida un número al usuario 
y determine si es par o impar usando una sentencia if y el operador % para verificar si es divisible por 2.
Conceptos cubiertos: Condicionales (if, else), operadores aritméticos.*/
if (num1 % 2 == 0){
    console.log('el numero '+num1+' es par');
} else{
    console.log('el numero '+num1+' es impar')};

if (num2 % 2 == 0){
    console.log('el numero '+num2+' es par');
} else{
    console.log('el numero '+num2+' es impar')};



/* 3.- TABLA DE MULTIPLICAR
Crea un programa que imprima la tabla de multiplicar de un número proporcionado por el usuario 
(por ejemplo, del 1 al 10 para el número ingresado).
Conceptos cubiertos: Bucles for, operadores aritméticos, entrada de datos.*/
for (var i=1; i>=1 && i<11; i++){
        console.log(num1+ ' x '+i+' = '+(num1*i));
    }


/* 4.- CONDICIONAL EDAD
Escribe un programa que pida al usuario su edad y luego determine si es mayor de edad (18 o más) 
o menor de edad (menos de 18) usando una sentencia if.
Conceptos cubiertos: Condicionales (if, else), operadores de comparación.*/
var edadUsuario = parseInt(prompt("Ingrese su edad: "));

if (edadUsuario<=0){
    edadUsuario = parseInt(prompt("Ingrese un numero entre 1-99: "));
}else if(edadUsuario<=14){
    console.log('El usuario es un niño');
}else if(edadUsuario>=15 && edadUsuario<=18){
    console.log('El usuario es un Adolescente');
}else if(edadUsuario>=19 && edadUsuario<=60){
    console.log('El usuario es un adulto')
}else if(edadUsuario>=60 && edadUsuario<=99){
    console.log('el ususario es una Anciano')
}else if(edadUsuario>=100){
    var edadUsuario = parseInt(prompt("Ingrese un numero entre 1-99: "));
}



/* Ejercicio 5: Sentencias if, else if y else
Objetivo: Aprender a usar las sentencias condicionales para tomar decisiones en tu código.
Descripción:
1.	Escribe un programa que verifique si un número es mayor que 10, menor que 5, o está entre 5 y 10.
o	Si el número es mayor que 10, muestra "Mayor que 10".
o	Si el número es menor que 5, muestra "Menor que 5".
o	Si el número está entre 5 y 10, muestra "Entre 5 y 10".*/

let num = prompt('Ingrese el numero a verificar entre 1 -10: ');

if(num>=10){
    console.log('el numero ingresado ' +num, 'es igual o Mayor a 10');
}else if((num<10) && (num>5)){
    console.log('el numero ingresado ' +num, 'esta Entre 5 y 10');
}else{
    console.log('el numero ingresado ' +num, 'es menor a 5');
}


/*________________________________________
Ejercicio 6: Operadores lógicos &&, ||, !
Objetivo: Comprender cómo combinar condiciones con operadores lógicos.
Descripción:
1.	Escribe un programa que verifique si una persona puede votar según su edad y si tiene identificación:
o	La persona puede votar si tiene 18 años o más y tiene identificación.
o	Si tiene menos de 18 años o no tiene identificación, no puede votar.*/

let usuario, fechaNaciemintoPersona, identificacionFecha, edadUsuario;

fecha = new Date(); //FECHA DE HOY
usuario = prompt('Ingrese su Nombre y Apellido: '); // SOLICITA NOMBRE USUARIO

fechaNaciemintoPersona = prompt('ingrese su Fecha nacieminto (mes/dia/año): ');
fechaNaciemintoPersona = new Date(fechaNaciemintoPersona); // CONVIERTE LA FECHA EN OBJETO DATE

identificacionFecha = prompt('Ingrese la Fecha de emision de su RUT (mes/dia/año) : ');
identificacionFecha = new Date(identificacionFecha); // CONVIERTE LA FECHA EN OBJETO DATE

//CALCULA LA EDAD DEL USUARIO
edadUsuario = fecha.getFullYear() - fechaNaciemintoPersona.getFullYear(); // CONVIERTE LA FECHA EN SOLO AÑO DE NACIMIENTO
rut = identificacionFecha.getFullYear(); // CONVIERTE LA FECHA EN SOLO AÑO DE EMISION

//EVALUA SI PUEDE VOTAR O NO SEGUN CONDICIONES 
if(edadUsuario >= 18 && rut > 0){
    console.log(usuario, 'Puede Votar');
}else{
    console.log(usuario, 'es menor de Edad y no puede votar');
}


/*________________________________________
Ejercicio 7: Condición negativa con !
Objetivo: Aprender a usar el operador ! para negar condiciones.
Descripción:
1.	Escribe un programa que verifique si un número no es positivo.
o	Si el número es negativo o cero, muestra "Número no positivo".
o	Si el número es positivo, muestra "Número positivo".*/

let num = prompt('ingrese numero: ');

if(num <= 0){
    console.log('numero no positivo');
}else if( !(num <= 0)){
    console.log('Numero positvo')
}



/*
________________________________________
Ejercicio 8: Validación de acceso a un sitio web
Objetivo: Practicar múltiples condiciones y operadores lógicos.
Descripción:
1.	Crea un programa que valide si un usuario puede acceder a un sitio web:
o	El usuario debe ser mayor de edad y estar registrado.
o	Si el usuario cumple con ambas condiciones, muestra "Acceso permitido".
o	Si no cumple alguna, muestra "Acceso denegado".*/

let yearUsuario, usuario, contraseña;

// Base de datos (simulada)
const validarUsuario = 'Eduardo Salazar';
const validaContraseña = '19970551';

fecha = new Date(); //FECHA ACTUAL
// Registro ususario
usuario = prompt('Ingrese nombre y apellido: ');

// CALCULO EDAD USUARIO
yearUsuario = prompt('Ingrese su fecha de nacimiento (mes/dia/año): ');
yearUsuario = new Date(yearUsuario);

// CONVIERTE LAS FECHAS EN AÑOS 
edadUsuario = fecha.getFullYear() - yearUsuario.getFullYear();
console.log(edadUsuario);

// VALIDA ENTRADA DE DATOS CON BASE DE DATOS

if(edadUsuario >= 18){ //valida edad
    console.log('Es mayor de Edad')
    if(usuario === validarUsuario){ // valida ID
        contraseña = prompt('Ingrese su contraseña: ');
    }else{
     console.log('Ingrese nuevamente su id: ');
     usuario = prompt('Ingrese nombre y apellido: ');
    }
    
    if((contraseña === validaContraseña) && (usuario === validarUsuario)){ // Valida Contraseña e ID
     console.log('ACCESO APROBADO')
    }else{
     console.log('ACCESO -DENEGADO-');
    }
}else{
    console.log('Usuario menor de Edad, Acceso Denegado')
}




/*
________________________________________
Ejercicio 9: Validación de contraseña
Objetivo: Usar else if y operadores lógicos para validar contraseñas.
Descripción:
1.	Crea un programa que valide si una contraseña es segura:
o	La contraseña debe tener al menos 8 caracteres y debe contener al menos un número.
o	Si la contraseña cumple con ambas condiciones, muestra "Contraseña segura".
o	Si no cumple alguna, muestra "Contraseña no segura". */

let contrasena; //primerCaracter, segundoCaracter, tercerCaracter, cuartoCaracter, quintoCaracter, sextoCaracter, septimoCaracter, octavoCaracter;

contrasena = prompt('Ingrese contraseña (8 caracteres, almenos 1 Letra): ');

numCaracteres = contrasena.length; // Cantidad de ccaracteres

contrasena = Array.from(contrasena); //convierte el String en Array

console.log(contrasena); 

// Valida si almenos tiene un numero la contraseña
if(numCaracteres >=8){
    if((contrasena[0]>=0) || (contrasena[1]>=0) || (contrasena[2]>=0) || (contrasena[3]>=0) || (contrasena[4]>=0) || (contrasena[5]>=0) || (contrasena[6]>=0) || (contrasena[7]>=0) || (contrasena[8]>=0)){
        console.log('Contraseña Segura')
       }
}else{
    console.log('Contraseña INSEGURA')
}



/*
________________________________________
Ejercicio 10: Menú de opciones con if-else
Objetivo: Crear un menú con condiciones múltiples.
Descripción:
1.	Escribe un programa que simule un menú con tres opciones:
o	Opción 1: Saludar
o	Opción 2: Mostrar la fecha y hora actual
o	Opción 3: Salir
o	Si el usuario ingresa una opción diferente, muestra "Opción no válida".*/

let opciones;

opciones = prompt('Ingrese opcion a elegir: \nOpcion 1 \nOpcion 2 \nOpcion 3 ');

console.log(opciones);

//muestra la opcion ingresada por usuario
if( opciones == 1 ){
    alert ('Hola Hijuelagranputa');
}else if ( opciones == 2){
      fecha = new Date();
      alert (fecha);
} else if( opciones == 3 ){
    alert('Salir');
} else{
    alert ("Opción no válida");
}



/* 
________________________________________
Ejercicio 11: Juego de adivinanza con condicionales
Objetivo: Usar condicionales en un juego interactivo.
Descripción:
1.	Crea un juego en el que el usuario debe adivinar un número entre 1 y 5.
o	Si el usuario adivina correctamente, muestra "¡Ganaste!".
o	Si el usuario falla, muestra "Inténtalo de nuevo".*/

let numeroUsuario, numeroAleatorio, numeroAleatorioRedondeado;

//Numero para adivinar
numeroUsuario = prompt('Ingrese un numero: ');

//numero aleatorio
numeroAleatorio = (Math.random(Math.floor()) * 10);

numeroAleatorioRedondeado = Math.round(numeroAleatorio);

//Adivinar numero
if(numeroUsuario == numeroAleatorioRedondeado){
    alert ('GANASTE');
}else{
    alert ('Sigue intentando');
}

console.log('Ingresaste: ', numeroUsuario, 'el numero adivinado: ', numeroAleatorioRedondeado);



/*
________________________________________
Ejercicio 12: Ingreso de una contraseña con intento máximo
Objetivo: Limitar el número de intentos con condicionales.
Descripción:
1.	Crea un sistema de inicio de sesión con un límite de 3 intentos para ingresar la contraseña correctamente.
o	Si el usuario ingresa la contraseña correcta, muestra "Bienvenido".
o	Si el usuario falla más de 3 veces, muestra "Acceso bloqueado".*/

let contrasenaBaseDatos = 19970551;
let intentos = 3; // Número máximo de intentos

for (let i = 1; i <= intentos; i++) {
    let contrasena = prompt(`Ingrese su contraseña (Intento ${i}/${intentos}): `);

    if (Number(contrasena) === contrasenaBaseDatos) {
        console.log("BIENVENIDO");
        break; // Sale del bucle si la contraseña es correcta
    } else if (i === intentos) {
        console.log("ACCESO BLOQUEADO"); // Último intento fallido
    }
}


/*
________________________________________
Ejercicio 12: Usar break para buscar un número en un array
Objetivo: Practicar el uso de break para salir de un bucle al encontrar una condición específica.
Descripción:
1.	Usa un bucle for para buscar el número 8 en un array de números.
2.	Si lo encuentras, muestra "Número encontrado" y termina el bucle.*/

let numeros = prompt('Ingrese un numero de 10 digitos: ')

Array.from(numeros),
console.log(numeros);

longitudArray = numeros.length

for (let i=0; i<=longitudArray; i++){
        for (let a=8; a==8; a){
            console.log('numero encontrado en posicion', numeros.indexOf('8'));
        break;
        }
    }





