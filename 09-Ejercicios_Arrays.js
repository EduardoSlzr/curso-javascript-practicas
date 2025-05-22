//                                        Ejercicios de Arrays en JavaScript


// Ejercicio 1: Crear un Array
// Aprender a declarar y acceder a arrays.
// 1. Crea un array llamado `frutas` con los valores: "manzana", "banana", "uva".
// 2. Imprime el array completo en consola.
// 3. Imprime el segundo elemento del array.

let frutas = ["manzana","banana","uva"];
//console.table(frutas);
// console.table(frutas[2]);


// Ejercicio 2: Recorrer un Array con un `for`
// Aprender a recorrer arrays manualmente.
// 1. Crea un array llamado `numeros` con valores del 1 al 5.
// 2. Usa un ciclo `for` para imprimir cada número en consola.

let numeros = [1,2,3,4,5];

for (let i=0; i<numeros.length;i++){
       // console.log(numeros[i]);
}


// Ejercicio 3: Agregar elementos a un Array
// Usar `.push()` y `.unshift()` para añadir elementos.
// 1. Usa `.push()` para agregar "pera" al final del array `frutas`.
// 2. Usa `.unshift()` para agregar "naranja" al inicio.

frutas.push("Pera");
frutas.unshift("Naranja");
//console.table(frutas);

// Ejercicio 4: Eliminar elementos con `.splice()`
// Eliminar elementos de un array en una posición específica.
// 1. Elimina el segundo y tercer elemento del array `frutas`.
// 2. Imprime el array resultante.

frutas.splice(1,2);
//console.table(frutas);

// Ejercicio 5: Crear un nuevo array con el spread operator
// Usar el spread operator para copiar y extender arrays.
// 1. Crea un array `masFrutas` que contenga todos los elementos de `frutas` más "kiwi" y "mango".
// 2. Imprime el nuevo array.

let masFrutas = [...frutas,"kiwi", "mango"];
//console.table(masFrutas);


// Ejercicio 6: Destructuring de arrays
// Extraer valores de arrays usando destructuring.
// 1. Usa destructuring para obtener los dos primeros elementos de `masFrutas` en variables individuales.
// 2. Imprime esas variables.

let [Fruta1] = masFrutas;
let [, Fruta2] = masFrutas;
// console.log(Fruta1);
// console.log(Fruta2);



// Ejercicio 7: Usar `.forEach()` para iterar
// Practicar la iteración con `.forEach()`.
// 1. Crea un array `colores` con al menos 4 colores.
// 2. Usa `.forEach()` para imprimir cada color con el mensaje "Color: <color>".

const colores = ["azul", "rojo", "amarillo", "verde"];

colores.forEach(color => console.log(`Color: ${color}`));


// Ejercicio 8: Usar `.map()` para transformar un array
// Crear un nuevo array con `.map()`.
// 1. Crea un array `numeros` del 1 al 5.
// 2. Usa `.map()` para crear un nuevo array `cuadrados` con los cuadrados de los números.
// 3. Imprime el resultado.

let cuadrados = numeros.map( cuadrado => Math.pow(cuadrado, 2));
console.log(cuadrados);


// Ejercicio 9: Diferencias entre `.forEach()` y `.map()`
// Comprender las diferencias clave entre ambos métodos.
// 1. Usa `.forEach()` para intentar guardar un nuevo array con el doble de los números.
// 2. Luego usa `.map()` correctamente.
// 3. Explica qué sucede en cada caso.

/*

   En el caso del .foreach() el mismo itera sobre el array "numeros" pero NO crea un nuevo arreglo 
   para poder almacenar la informacion por lo tanto al llamar a "dobleNumeros1" marca como "undefined" 

   Si quisieras almacenar los valores con .forEach(), deberías hacerlo manualmente con un nuevo array:

            let dobleNumeros1 = [];
            numeros.forEach(doble => dobleNumeros1.push(doble * 2));
            console.log(dobleNumeros1); // Ahora sí contiene los valores duplicados

*/
let dobleNumeros1 = numeros.forEach(doble => doble * 2);
console.log(dobleNumeros1);


/*

  En cambio el metodo .map() itera y crea a su vez un nuevo arreglo para almacenarla informacion, al momento de 
  ser llamado a la consola refleja el nuevo array con sus nuevos valores
  Es ideal para modificar cada elemento y almacenar el resultado

*/
let dobleNumeros2 = numeros.map((doble) => doble *2);
console.log(dobleNumeros2);



// Ejercicio 10: Filtrar elementos (BONUS)
// Usar `.filter()` para crear subarrays.
// 1. Crea un array con edades.
// 2. Usa `.filter()` para obtener solo las edades mayores de 18.

const edades = [19,27,11,18,23,4,51,6,71];

let mayoresDeEdad = edades.filter((edad) => edad >= 18);
console.log(mayoresDeEdad);



// Ejercicio 11: Encontrar elementos (BONUS)
// Usar `.find()` para obtener el primer valor que cumpla una condición.
// 1. Usa `.find()` para encontrar la primera edad menor de 18.

/*
Asigna el resultado de su iteracion al primer elemento que cumpla con la condicion establecida.
*/

let menorDeEdad = edades.find((menor) => menor < 18);
console.log(menorDeEdad);


// Ejercicio 12: Usar `.includes()` para verificar valores
// Verificar si un array contiene cierto valor.
// 1. Verifica si "banana" está en el array `frutas`.
// 2. Verifica si "sandía" está en `masFrutas`.

let Banana = frutas.includes("banana");
console.table(frutas);
console.log(`Hay bananas:`, Banana);


let Sandia = masFrutas.includes("sandía");
console.table(masFrutas);
console.log(`Hay Sandia:`, Sandia);



for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
