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


// console.log('Hola, esto es un mensaje de prueba.');
// console.log(42);
// console.log({ nombre: 'Juan', edad: 30 });


// console.error('¡Algo salió mal!');

// console.warn('Cuidado, esto podría no funcionar como se espera.');

// console.info('Información importante: el servidor está funcionando correctamente.');

// const usuarios = [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 25 }];
// console.table(usuarios);


// const fechaActual = new Date();
// console.log(fechaActual);

// const fechaEspecifica = new Date('2023-07-24T12:00:00');
// console.log(fechaEspecifica);

// const fecha = new Date('2023-07-24');
// const año = fecha.getFullYear();
// const mes = fecha.getMonth(); // Los meses comienzan desde 0 (enero = 0, febrero = 1, ...)
// const día = fecha.getDate();

// console.log(año, mes, día);


// const fecha = new Date('2023-07-24');
// const díaSemana = fecha.getDay(); // Los días de la semana van de 0 (domingo) a 6 (sábado)

// console.log(díaSemana); // Output: 0 (domingo)


// const fecha = new Date('2023-07-24');
// const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
// const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

// console.log(fechaFormateada); // Output: "24 de julio de 2023"


// const numero = -5;
// const valorAbsoluto = Math.abs(numero);

// console.log(valorAbsoluto); // Output: 5

// const numero = 3.6;
// const redondeado = Math.round(numero);

// console.log(redondeado); // Output: 4


// const numero1 = 10;
// const numero2 = 25;
// const numero3 = 15;

// const numeroMayor = Math.max(numero1, numero2, numero3);

// console.log(numeroMayor); // Output: 25


// const numero1 = 10;
// const numero2 = 25;
// const numero3 = 15;

// const numeroMenor = Math.min(numero1, numero2, numero3);

// console.log(numeroMenor); // Output: 10

// const numeroAleatorio = Math.random();

// console.log(numeroAleatorio);


// const pi = Math.PI;

// console.log(pi); // Output: 3.141592653589793


// const a = true;
// const b = false;
// const result = a && b; // El resultado es 'false', y 'b' no se evalúa.

// const a = false;
// const b = true;
// const result = a || b; // El resultado es 'true', y 'b' no se evalúa.


// alert('¡Hola! Bienvenido a nuestra página.');

// const resultado = confirm('¿Estás seguro de que quieres eliminar este elemento?');
// if (resultado) {
//   // Código para eliminar el elemento
// } else {
//   // Código para cancelar la eliminación
// }


// const nombre = prompt('Por favor, ingresa tu nombre:');
// if (nombre !== null) {
//   alert('¡Hola, ' + nombre + '! Bienvenido.');
// } else {
//   alert('No ingresaste tu nombre.');
// }


// const cadena = "La expresión regular es poderosa.";
// const patron = /expresión/;
// const resultado = cadena.match(patron);

// console.log(resultado); // Output: ["expresión"]


// const cadena = "El gato es un animal, pero también el gatito.";
// const patron = /gato/g;
// const resultado = cadena.replace(patron, "perro");

// console.log(resultado); // Output: "El perro es un animal, pero también el perrito."

// const correo = "usuario@example.com";
// const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const esValido = patron.test(correo);

// console.log(esValido); // Output: true



// (function() {
//     // Código de la función
//   })();


// (function() {
//     const mensaje = "¡Hola desde la IIFE!";
//     console.log(mensaje);
//   })();


// const miModulo = (function() {
//     const privadoVariable = "Soy una variable privada.";
  
//     function privadoFuncion() {
//       console.log("Soy una función privada.");
//     }
  
//     return {
//       publicoFuncion: function() {
//         console.log("Soy una función pública.");
//       }
//     };
//   })();
  
//   miModulo.publicoFuncion(); // Output: "Soy una función pública."
//   miModulo.privadoVariable; // Output: undefined (no accesible desde fuera de la IIFE)
//   miModulo.privadoFuncion; // Output: undefined (no accesible desde fuera de la IIFE)
  
  
  
// setTimeout(function() {
//     console.log("Este mensaje se mostrará en la consola de depuración del navegador después de 5 segundos.");
//   }, 5000);



//   setInterval(function() {
//     console.log("Este mensaje se mostrará en la consola de depuración del navegador cada 5 segundos.");
//   }, 5000);

// function asincrono() {
//     // Este es un ejemplo de una función asíncrona.
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve("La función se ejecutó con éxito.");
//       }, 1000);
//     });
//   }
  
//   asincrono().then(function(resultado) {
//     // Esta función se ejecutará cuando la función asincrona se haya completado.
//     console.log(resultado);
//   });


//   document.querySelector("#button").addEventListener("click", function() {
//     // Este es un ejemplo de un evento.
//     fetch("https://api.example.com/").then(function(response) {
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     });
//   });



// document.querySelector("#button").addEventListener("click", function() {
//     // Este es un ejemplo de un evento.
//     fetch("https://api.example.com/").then(function(response) {
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     });
//   });









