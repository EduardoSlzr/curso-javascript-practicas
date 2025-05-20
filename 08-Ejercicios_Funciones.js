//                                 EJERCICIOS para dominar las funciones en JavaScript
//  cubriendo temas como la DECLARACIÓN DE FUNCIONES, LOS PARÁMETROS, LOS VALORES DE RETORNO,y LAS FUNCIONES ANÓNIMAS y FLECHA (=>).


// ________________________________________
// Ejercicio 1: Declaración básica de una función
// Objetivo: Aprender a declarar y llamar una función en JavaScript.
// Descripción:
// 1.	Declara una función llamada saludar que imprima "¡Hola, mundo!" en la consola.
// 2.	Llama a la función para que se ejecute.

function Saludar(){
    console.log("hola Mundo");
}

Saludar();


// ________________________________________
// Ejercicio 2: Función con parámetros
// Objetivo: Aprender a usar parámetros en las funciones.
// Descripción:
// 1.	Declara una función llamada sumar que reciba dos parámetros y devuelva la suma de estos dos números.
// 2.	Llama a la función pasando dos números como argumentos y muestra el resultado.

function sumar(num1, num2){
    console.log(num1+num2);
};

sumar(10,20);

//otra forma
function sumar2(a, b) {
    return a + b;
}

let resultado = sumar2(3, 5);
console.log(resultado);  // Resultado esperado: 8


// ________________________________________
// Ejercicio 3: Función con valor de retorno
// Objetivo: Aprender cómo las funciones pueden devolver valores.
// Descripción:
// 1.	Crea una función llamada esPar que reciba un número y devuelva true si es par y false si es impar.
// 2.	Llama a la función con un número y muestra el resultado en la consola.

function isPar(num){
    if(num%2===0){
        console.log(true);
    }else {
        console.log(false);
    }
}
isPar(100);


//otra forma
function esPar(num) {
    return num % 2 === 0;
}
console.log(esPar(4));  // true
console.log(esPar(7));  // false


// ________________________________________
// Ejercicio 4: Función que no devuelve nada (void)
// Objetivo: Practicar funciones que no retornan valores.
// Descripción:
// 1.	Crea una función llamada mostrarMensaje que imprima un mensaje en la consola, pero que no devuelva nada.
// 2.	Llama a la función para que imprima el mensaje.

function mostrarMensaje(){
    console.log("Hola mensaje Vacio");
}

mostrarMensaje()

const Mensaje = mostrarMensaje();
console.log(Mensaje);


// ________________________________________
// Ejercicio 5: Función con parámetros opcionales
// Objetivo: Aprender a usar valores predeterminados para parámetros.
// Descripción:
// 1.	Crea una función llamada saludarPersonalizado que reciba un parámetro nombre. Si no se pasa un valor para nombre, 
// debería usar "Visitante" por defecto.
// 2.	Llama a la función sin pasar un parámetro y luego con un nombre.

function saludarPersonalizado(nombre = "Visitante"){
        return nombre;
}

console.log(saludarPersonalizado());
console.log(saludarPersonalizado("paul"));

// ________________________________________
// Ejercicio 6: Función anónima
// Objetivo: Aprender a crear funciones anónimas (sin nombre).
// Descripción:
// 1.	Declara una función anónima que sume dos números y asigna esta función a una variable llamada sumarAnonima.
// 2.	Llama a la función utilizando la variable.


let sumarAnonima = function (num_1 , num_2){
    return num_1 + num_2;
}

console.log(sumarAnonima(5,7));

// ________________________________________
// Ejercicio 7: Función flecha (arrow function)
// Objetivo: Aprender a usar funciones flecha para una sintaxis más concisa.
// Descripción:
// 1.	Convierte la función sumarAnonima del ejercicio anterior en una función flecha.
// 2.	Llama a la función usando la nueva sintaxis.


sumarAnonima2 = (a,b) => {
    return a+b;
}

console.log(sumarAnonima2(5,50));

// ________________________________________
// Ejercicio 8: Función flecha con un solo parámetro
// Objetivo: Usar funciones flecha con un solo parámetro.
// Descripción:
// 1.	Crea una función flecha llamada doblar que reciba un número y devuelva su doble.
// 2.	Llama a la función pasando un número como argumento y muestra el resultado.

doblar = (numero_1) => {
    return numero_1 * 2;
}

console.log(doblar(22));


// ________________________________________
// Ejercicio 9: Función con múltiples parámetros y valor de retorno
// Objetivo: Trabajar con funciones que toman múltiples parámetros y devuelven un valor.
// Descripción:
// 1.	Crea una función llamada calcularAreaRectangulo que reciba dos parámetros: base y altura.
// 2.	La función debe devolver el área del rectángulo (base * altura).
// 3.	Llama a la función pasando valores y muestra el resultado.

calcularAreaRectangulo = (base, altura) =>{
    console.log(base * altura);
}

calcularAreaRectangulo(10,500);

// ________________________________________
// Ejercicio 10: Función con return dentro de un if
// Objetivo: Aprender a usar return dentro de condiciones.
// Descripción:
// 1.	Crea una función llamada esPositivo que reciba un número.
// 2.	Si el número es positivo, devuelve true; si es negativo, devuelve false. Si es cero, devuelve "Cero".
// 3.	Llama a la función con diferentes valores y muestra los resultados.

isPositive = (numero1) =>{
    if(numero1<0){
        return false;
    }else if(numero1>0){
        return true;
    }else{
        return "cero";
    }
}

console.log(isPositive(0));
console.log(isPositive(-1));
console.log(isPositive(1));


// ________________________________________
// Ejercicio 11: Función recursiva
// Objetivo: Entender cómo funcionan las funciones recursivas.
// Descripción:
// 1.	Crea una función recursiva llamada factorial que calcule el factorial de un número 
// (el producto de todos los enteros positivos hasta ese número).
// 2.	Llama a la función con un número y muestra el resultado.

function factorial(numero_1){
   if(numero_1===0){
        return 1;
   }
   return numero_1 * factorial(numero_1-1);
}

console.log(factorial(5));

// ________________________________________
// Ejercicio 12: Pasar una función como argumento
// Objetivo: Aprender a pasar funciones como parámetros.
// Descripción:
// 1.	Crea una función llamada ejecutarOperacion que reciba dos números y una función como parámetro.
// 2.	La función debe aplicar la operación (sumar, restar, multiplicar, etc.) y devolver el resultado.
// 3.	Llama a ejecutarOperacion pasando una función flecha para realizar una suma.


// Función que recibe dos números y una función como parámetro
function ejecutarOperacion(numUno, numDos, operacion) {
    return operacion(numUno, numDos);
}

// Definir las funciones de operación como funciones flecha
const sumar3 = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Llamar a la función pasando las funciones como argumento
console.log(ejecutarOperacion(2, 10, sumar3));       
console.log(ejecutarOperacion(2, 10, restar));      
console.log(ejecutarOperacion(2, 10, multiplicar)); 
console.log(ejecutarOperacion(2, 10, dividir));     




// ________________________________________
// Ejercicio 13: Función que retorna otra función
// Objetivo: Aprender a devolver funciones desde otras funciones.
// Descripción:
// 1.	Crea una función llamada crearMultiplicador que reciba un número n y devuelva una nueva función que multiplique cualquier 
// número por n.
// 2.	Llama a crearMultiplicador con el número 2 y usa la función resultante para multiplicar el número 5.

function crearMultiplicador(n){
    return function(x){
        return x * n;
    };
}

let multiplicadorPor2 = crearMultiplicador(2);

console.log(multiplicadorPor2(5));

// ________________________________________
// Ejercicio 14: Función con varios valores de retorno
// Objetivo: Usar una función que devuelva varios valores usando un objeto o un array.
// Descripción:
// 1.	Crea una función llamada estadisticas que reciba un número y devuelva un objeto con el cuadrado, el cubo y la raíz cuadrada 
//      de ese número.
// 2.	Llama a la función con el número 9 y muestra los resultados.

function Estadistica (Numero_1){
        return {
            Cuadrado: Math.pow(Numero_1, 2),
            Cubo: Math.pow(Numero_1, 3),
            Raiz: Math.sqrt(Numero_1),
        }
}

console.log(Estadistica(9));


// ________________________________________
// Ejercicio 15: Función que manipula un array
// Objetivo: Trabajar con funciones que modifican arrays.
// Descripción:
// 1.	Crea una función llamada doblarElementos que reciba un array de números y devuelva un nuevo array 
//      con cada elemento multiplicado por 2.
// 2.	Llama a la función con un array de números y muestra el resultado.

function doblarElementos(Numeros){
    console.log(Numeros);
    return Numeros.map(NumerosDoblados => NumerosDoblados * 2);
}

console.log(doblarElementos([1,2,3,4]));





