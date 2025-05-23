// RETO FIZZ BUZZ

// ¿En qué consiste FizzBuzz?
// El objetivo es escribir un programa que imprima números, general-mente del 1 al 100 (o hasta cualquier número n), pero con algunas ex-cepciones:
// 1.	Si el número es divisible por 3, en lugar del número, imprime la palabra "Fizz".
// 2.	Si el número es divisible por 5, en lugar del número, imprime la palabra "Buzz".
// 3.	Si el número es divisible por ambos, 3 y 5 (es decir, divisible por 15), en lugar del número, imprime la palabra "FizzBuzz".
// 4.	Si el número no cumple ninguna de las condiciones anteriores, simplemente imprime el número mismo.

for (let i=1; i<= 100; i++){
    if(i%3===0 && i%5===0){
        console.log( i, "Fizzbuzz");
        continue;
    }
    if(i%3===0){
        console.log( i, "Fizz");
        continue;
    }
    if(i%5===0){
        console.log( i, "Buzz");
        continue;
    } else {
        console.log(i);
    }
}

//otra forma

function fizzBuzzHasta(limite) {

  for (let i = 1; i <= limite; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // También podrías usar i % 15 === 0
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
}

// Vamos a probarlo hasta el 20
fizzBuzzHasta(20);
