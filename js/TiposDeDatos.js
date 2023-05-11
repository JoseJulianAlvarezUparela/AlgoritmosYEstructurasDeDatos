// console.log("variables con VAR")

// var nombre = "Juan";
// var edad = 30;
// var ciudad = "Madrid";

// console.log("Mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");



// console.log("*********************************")
// console.log("Variables con LET")


// let nombre2 = "María";
// let edad2 = 25;
// let ciudad2 = "Barcelona";

// console.log(`Mi nombre es ${nombre2}, tengo ${edad2} años y vivo en ${ciudad2}.`);



// console.log("*********************************")
// console.log("Variables con CONST")


// const nombre3 = "Pedro";
// const edad3 = 40;
// const ciudad3 = "Valencia";

// console.log(`Mi nombre es ${nombre3}, tengo ${edad3} años y vivo en ${ciudad3}.`);


// console.log("*********************************")
// console.log("Variables con STRING")

// let nombre = "Juan";
// let mensaje = "Hola, ¿cómo estás?";
// let direccion = 'Calle Mayor, 10';

// console.log("*********************************")
// console.log("Variables con TEMPLATE_STRING")


// let nombre = "Juan";
// let edad = 30;
// console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


// console.log("*********************************")
// console.log("Variables con NUMEROS")

// let x = 10;
// let y = 3.14;

// console.log(x,y)


// console.log("*********************************")
// console.log("Variables con BULEANAS")

// let esVerdadero = true; // asignación de un valor booleano verdadero a la variable esVerdadero
// let esFalso = false; // asignación de un valor booleano falso a la variable esFalso

// let resultado1 = 10 > 5; // asignación del resultado de una comparación (verdadero) a la variable resultado1
// let resultado2 = 10 < 5; // asignación del resultado de una comparación (falso) a la variable resultado2

// console.log(esVerdadero); // true
// console.log(esFalso); // false
// console.log(resultado1); // true
// console.log(resultado2); // false


// console.log("*********************************")
// console.log("Variables con NULOS y UNDEFINED")

// let x = null; // asignación de un valor null a la variable x
// let y; // declaración de una variable sin valor asignado (valor por defecto es undefined)

// console.log(x); // null
// console.log(y); // undefined

// if (x === null) {
//   console.log('x es null'); // x es null
// }

// if (y === undefined) {
//   console.log('y es undefined'); // y es undefined
// }

// let z = 10;

// if (z === undefined) {
//   console.log('z es undefined');
// } else {
//   console.log('z tiene un valor asignado'); // z tiene un valor asignado
// }


// console.log("*********************************")
// console.log("Variables con Nan")


// let x = 10 / 'abc'; // dividir un número por una cadena produce NaN
// console.log(x); // NaN

// let y = Math.sqrt(-1); // la raíz cuadrada de un número negativo produce NaN
// console.log(y); // NaN

// if (isNaN(x)) {
//   console.log('x es NaN'); // x es NaN
// }

// if (isNaN(y)) {
//   console.log('y es NaN'); // y es NaN
// }



// console.log("*********************************")
// console.log("Funciones")

// function greet(name) {
//     console.log('Hola, ' + name + '!');
//   }
  
//   greet('Juan'); // Hola, Juan!
//   greet('María'); // Hola, María!
  

// function add(a, b) {
//     return a + b;
//   }
  
//   let result = add(2, 3);
//   console.log(result); // 5  


// console.log("*********************************")
// console.log("Objetos")

// let persona = {
//     nombre: 'Juan',
//     edad: 30,
//     saludar: function() {
//       console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.');
//     }
//   };
  
//   console.log(persona.nombre); // Juan
//   console.log(persona.edad); // 30
//   persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
  

// persona.nombre = 'María';
// persona.edad = 25;
// persona.profesion = 'Desarrolladora';

// console.log(persona); // { nombre: 'María', edad: 25, saludar: [Function], profesion: 'Desarrolladora' }
