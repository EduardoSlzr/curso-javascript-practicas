"use strict";
    //                                   🧪 Ejercicios de Objetos en JavaScript 

// ________________________________________
// ✅ Ejercicio 1: Crear un objeto básico
// Enunciado:
// Crea un objeto llamado persona con las siguientes propiedades:
// •	nombre: "Juan"
// •	edad: 30
// •	profesion: "Desarrollador"
// Agrega una propiedad email y luego modifícala.

const persona = {
    nombre: "Eduardo",
    edad: 30,
    profesion: "Desarrollador"
};

persona.email = "123@gamil.com";

persona.email = "cambioEmail@hotmail.com";

//console.log(persona);

// ________________________________________
// ✅ Ejercicio 2: Acceder y modificar propiedades
// Enunciado:
// Usando el objeto persona:
// •	Muestra el nombre con console.log()
// •	Cambia la edad a 31
// •	Agrega una propiedad ciudad
// •	Elimina la propiedad profesion

//console.log(persona.nombre);

persona.edad = 34;
persona.ciudad = "Santiago";
delete persona.profesion;

//console.log(persona);


// ________________________________________
// ✅ Ejercicio 3: Método con this
// Enunciado:
// Crea un objeto auto con:
// •	marca: "Toyota"
// •	modelo: "Corolla"
// •	año: 2020
// Agrega un método obtenerDescripcion() que devuelva:
// "Toyota Corolla (2020)"

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año:2020,
    obtenerDescripcion: function() {
        return `${this.marca} ${this.modelo} ${this.año}`;
    }
  };

//console.log(auto.obtenerDescripcion());


// ________________________________________
// ✅ Ejercicio 4: Nombre completo con this
// Enunciado:
// Crea un objeto usuario con:
// •	nombre: "Ana"
// •	apellido: "Pérez"
// Agrega un método nombreCompleto() que devuelva "Ana Pérez"

const usuario = {
    nombre: "Ana",
    apellido: "Perez",
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

//console.log(usuario.nombreCompleto());

// ________________________________________
// ✅ Ejercicio 5: Objeto dentro de objeto
// Enunciado:
// Crea un objeto libro con:
// •	titulo: "El Principito"
// •	autor: un objeto con:
// o	nombre: "Antoine"
// o	apellido: "de Saint-Exupéry"
// •	año: 1943
// Muestra el nombre completo del autor.

const libro = {
    titulo: "El principito",
    autor : {
            nombre: "Antoine",
            apellido: "de Saint-Exupéry"
            },
    año: 1943,
}

//console.log(libro.autor.nombre, libro.autor.apellido);


// ________________________________________
// ✅ Ejercicio 6: Array de objetos
// Enunciado:
// Crea un array tareas con 2 objetos. Cada objeto debe tener:
// •	id
// •	descripcion
// •	completada (booleano)
// Luego:
// •	Muestra todas las descripciones con .forEach()
// •	Filtra las tareas completadas



const tareas = [ {id : "limpiar Casa", descripcion : "Barrer", completada: false},
               {id : "Almuerzo", descripcion : "cocinar Sopa", completada: true}
];

//el for each recorre cada posicion del array y crea una variable en el (parametro) de la funcion

//tareas.forEach( t => console.log(t.descripcion));

//usamos filter para filtrar informacion dentro de los objetos

const completadas = tareas.filter((t) => {return t.completada === true});
//console.log(completadas);



const tareas2 = [
  { id: 1, descripcion2: "Aprender JS", completada2: true },
  { id: 2, descripcion2: "Practicar objetos", completada2: true }
];

//tareas2.forEach(t => console.log(t.descripcion2));

const completadas2 = tareas2.filter(t => t.completada2 === true);
//console.log(completadas2);



// ________________________________________
// ✅ Ejercicio 7: Destructuring
// Enunciado:
// Crea un objeto usuario con:
// •	nombre: "Carlos"
// •	edad: 28
// •	pais: "Chile"
// Extrae nombre y edad usando destructuring.


const usuario2 = {
    nombre: "Carlos",
    edad: 30,
    pais: "Chile",
}

const {nombre, edad} = usuario2;
//console.log(nombre, edad);



// ________________________________________
// ✅ Ejercicio 8: Spread Operator
// Enunciado:
// Crea un objeto persona y haz una copia con el spread operator.
// Agrega una propiedad nueva (ciudad) y cambia la edad sin modificar el original.

const persona1 = {
    nombre: "Luis",
    edad: 28,
    pais: "venezuela"
};

const persona2 = { ...persona1 };

persona2.ciudad = "valencia";
persona2.edad = 48;

//console.log(persona1,persona2);

// ________________________________________
// ✅ Ejercicio 9: Object.freeze() y Object.seal()
// Enunciado:
// Crea un objeto config con:
// •	modo: "oscuro"
// •	idioma: "es"
// Congela el objeto con Object.freeze() y prueba modificarlo.
// Luego, crea un segundo objeto ajustes, sella el objeto con Object.seal() y prueba agregar y modificar propiedades.

const config = {
    modo: "oscuro",
    idioma: "Es-español"
}

//Object.freeze(config); // NO permite ni agregar ni modificar propiedades

config.modo = "claro";
config.password = 1234;

//console.log(config);


const ajustes = {
    id: "oldUsuario",
    Pasword: 12345,
 }
Object.seal(ajustes);  // PERMITE modificar propiedades, NO agregar

ajustes.id = "NuevoUsuario";
ajustes.Pasword = 98765;
//ajustes.color = "azul";
//ajustes.empleado = true;

//console.log(ajustes);

// ________________________________________
// ✅ Ejercicio 10: Object.keys(), values(), entries()
// Enunciado:
// Crea un objeto persona con 3 propiedades.
// Muestra por consola:
// •	Las claves con Object.keys()
// •	Los valores con Object.values()
// •	Las entradas con Object.entries()

const persona3 = {
    nombre: "Luis",
    edad: 45,
    activo: false,
}

console.log(Object.keys(persona3));
console.log(Object.values(persona3));
console.log(Object.entries(persona3));
