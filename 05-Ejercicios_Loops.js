
//iteracion en progresion
for (let i=1; i<=10; i++){
    console.log(i);
}

//iteracion en regresion
for (i=10; i>=1; i--){
    console.log(i);
}

//iteracion en progresion y regresion escalada 
for (i=10; i>=1; i-=2){
    console.log(i);
}
for (i=1; i<=10; i+=3){
    console.log(i); 
   
   
   /*EJERCICIOS bucles FOR, WHILE Y DO...WHILE, así como el uso de las palabras clave BREAK y CONTINUE 
   dentro de los bucles.*/

   /*________________________________________
   Ejercicio 1: Bucle for para imprimir números del 1 al 10
   Objetivo: Practicar el uso del bucle for para iterar sobre un rango de números.
   Descripción:
   1.	Escribe un bucle for que imprima los números del 1 al 10 en la consola.*/

   for (let i=0; i<=10; i++){
       console.log(i);
   }

   /*________________________________________
   Ejercicio 2: Bucle while para imprimir números del 1 al 10
   Objetivo: Practicar el uso del bucle while para realizar una repetición con una condición.
   Descripción:
   1.	Escribe un bucle while que imprima los números del 1 al 10 en la consola.*/

   let i=1, resultado;

   while (i <= 10){
       resultado = i++;
   console.log(resultado)

   }

   /*
   ________________________________________
   Ejercicio 3: Bucle do...while para imprimir números del 1 al 10
   Objetivo: Practicar el uso del bucle do...while para garantizar que el bloque de código se ejecute al 
   menos una vez.
   Descripción:
   1.	Escribe un bucle do...while que imprima los números del 1 al 10 en la consola.*/

   let i=11, resultado;

   do{
       resultado=i++;
       console.log(resultado);
   }while(i<=10)

       /*
   ________________________________________
   Ejercicio 4: Sumar los números del 1 al 100 usando for
   Objetivo: Practicar el uso de bucles para realizar cálculos repetitivos.
   Descripción:
   1.	Usa un bucle for para sumar los números del 1 al 100 y muestra el resultado.*/

   let i , suma;

   for(i=0; i<=100; i++){
       suma = ((i * (1 + 100))/2);
   }

   console.log(suma);

   /*
   ________________________________________
   Ejercicio 5: Imprimir solo los números pares del 1 al 20 usando for
   Objetivo: Practicar el uso de bucles junto con condicionales.
   Descripción:
   1.	Usa un bucle for para imprimir los números pares del 1 al 20.*/

   let resultado ;

   for (let i = 0; i<=20; i++){
      if(!(i%2)){
       console.log(resultado = i);
      }   
   }

   /*
   ________________________________________
   Ejercicio 6: Imprimir los números impares del 1 al 20 usando while
   Objetivo: Practicar el uso de bucles while con condiciones.
   Descripción:
   1.	Usa un bucle while para imprimir los números impares del 1 al 20.*/

   let i=0, impar;

   while(i<=20){
       impar = i++;
       if(!(i%2)){
           console.log(impar);
       }
   }

   /*
   ________________________________________
   Ejercicio 7: Uso de break en un bucle for
   Objetivo: Aprender a usar break para salir de un bucle antes de que termine.
   Descripción:
   1.	Usa un bucle for para imprimir los números del 1 al 10.
   2.	Detén el bucle cuando el número sea 5.*/

   for (let i=0; i<=10; i++){
       if(i===5){
           break
       }
       console.log(i+1);
   }

   /*
   ________________________________________
   Ejercicio 8: Uso de continue en un bucle for
   Objetivo: Aprender a usar continue para saltar una iteración de un bucle.
   Descripción:
   1.	Usa un bucle for para imprimir los números del 1 al 10.
   2.	Salta la iteración cuando el número sea 5.*/

   for(let i=0; i<=10; i++){
       if(i===5){
           continue
       }
       console.log(i);
   }

   /*
   ________________________________________
   Ejercicio 9: Imprimir los múltiplos de 3 del 1 al 30 usando while
   Objetivo: Usar while junto con la lógica de múltiplos.
   Descripción:
   1.	Usa un bucle while para imprimir los múltiplos de 3 entre 1 y 30.*/

   let i=0;

   while(i<=30){
       if(i%3==0){
           console.log(i);
       }
       i++;
   }

   /*
   ________________________________________
   Ejercicio 10: Crear una tabla de multiplicar usando for
   Objetivo: Usar bucles para generar tablas de multiplicar.
   Descripción:
   1.	Usa un bucle for para imprimir la tabla de 
   multiplicar del número 7 (del 7x1 al 7x10).*/

   let multiplicar, multiplo = 7;


   for (let i=0; i<=10; i++){
       multiplicar = multiplo * i;
       console.log(multiplo +' x', i +' =', multiplo*i);
   }


   /*
   ________________________________________
   Ejercicio 11: Bucle do...while con condición de salida
   Objetivo: Practicar el uso de do...while con una condición más compleja.
   Descripción:
   1.	Usa un bucle do...while para pedir al usuario que ingrese un número mayor a 10.
   2.	El bucle debe continuar pidiendo el número hasta que el usuario ingrese un número mayor a 10.*/

   let num;

   do{
        num = prompt('Ingrese un numero: ');
   } while(num<=10)

       console.log(num);

/*   Ejercicio 12: Usar break para buscar un número en un array
   Objetivo: Practicar el uso de break para salir de un bucle al encontrar una condición específica.
   Descripción:
   1.	Usa un bucle for para buscar el número 8 en un array de números.
   2.	Si lo encuentras, muestra "Número encontrado" y termina el bucle.  */

   const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   for (i=0; i<=10; i++){
        if (i===8){
             console.log("Numero 8 encontrado");
        break;
        }
   }

/*   Ejercicio 13: Uso combinado de continue y break en un bucle
   Objetivo: Usar ambos comandos dentro de un bucle.
   Descripción:
   1.	Usa un bucle for para recorrer los números del 1 al 10.
   2.	Si el número es divisible por 2, imprime el número y salta al siguiente con continue.
   3.	Si el número es 8, termina el bucle con break.  */


 for (let i = 1; i <= 10; i++) {
      if (i === 8) {
          break;
      }
      if (i % 2 === 0) {
          console.log(i);
          continue;
      }
  }
 
 /* Ejercicio 14: Sumar los números impares del 1 al 50 usando for
 Objetivo: Sumar los números impares utilizando bucles.
 Descripción:
 1.	Usa un bucle for para sumar los números impares del 1 al 50 y muestra el resultado. */

 let suma =0;

 for (let i=1; i<=50; i++){

      if(i%2!==0){
           suma = (i + suma); tambien puede ser -->   suma += i;
      }
 }

 console.log("La suma de los números impares del 1 al 50 es: " + suma);


 /* Ejercicio 15: Mostrar un patrón con for
 Objetivo: Usar bucles para generar patrones de texto.
 Descripción: Usa un bucle for para mostrar el siguiente patrón:
 *
 **
 ***
 ****
 ***** */

 let estrella = ["*", "**", "***", "****", "******"];

 for (let i=0; i<=5; i++){
     
      console.log(estrella[i]);  tambien sirve -->     console.log('*'.repeat(i)); sin crear un array

 }


 /*Ejercicio 16: Encontrar el primer número primo en un rango
 Objetivo: Practicar bucles para realizar cálculos más complejos.
 Descripción:
 1.	Usa un bucle for para encontrar el primer número primo entre 1 y 100.*/


 for (let i=0; i<=100; i++){

      if(i%1===0 && i%2!==0 && i%i===0){
           console.log("El primer numero primo es " + i )
           break;
      }

 }


let esPrimo = true;

for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log("Primer número primo encontrado:", i);
        break;
    }
    esPrimo = true;
}
