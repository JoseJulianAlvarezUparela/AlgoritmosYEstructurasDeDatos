// let x = 10;
// let y = 3;

// let suma = x + y; // resultado: 13
// let resta = x - y; // resultado: 7
// let multiplicacion = x * y; // resultado: 30
// let division = x / y; // resultado: 3.3333...
// let modulo = x % y; // resultado: 1
// let incremento = ++x; // resultado: 11
// let decremento = --y; // resultado: 2


// let x = 10;
// let y = 3;

// x += y; // equivalente a x = x + y; resultado: 13
// x -= y; // equivalente a x = x - y; resultado: 10
// x *= y; // equivalente a x = x * y; resultado: 30
// x /= y; // equivalente a x = x / y; resultado: 10
// x %= y; // equivalente a x = x % y; resultado: 1


// let x = 10;
// let y = 3;

// console.log(x == y); // resultado: false
// console.log(x != y); // resultado: true
// console.log(x === '10'); // resultado: false
// console.log(x !== '10'); // resultado: true
// console.log(x > y); // resultado: true
// console.log(x < y); // resultado: false
// console.log(x >= y); // resultado: true
// console.log(x <= y); // resultado: false


// let x = 10;
// let y = 3;

// console.log(x == y); // resultado: false
// console.log(x != y); // resultado: true
// console.log(x === '10'); // resultado: false
// console.log(x !== '10'); // resultado: true
// console.log(x > y); // resultado: true
// console.log(x < y); // resultado: false
// console.log(x >= y); // resultado: true
// console.log(x <= y); // resultado: false



// let x = 10;
// let y = 3;

// console.log(x > 5 && y < 5); // resultado: true
// console.log(x > 5 || y < 5); // resultado: true
// console.log(!(x > 5)); // resultado: false


// let edad = 17;

// let esMayorDeEdad = (edad >= 18) ? 'Sí' : 'No';
// console.log(esMayorDeEdad); // resultado: No


// let x = 10;
// let y = 'Hola';

// console.log(typeof x); // resultado: number
// console.log(typeof y); // resultado: string
// console.log(x instanceof Number); // resultado: false
// console.log(y instanceof String); // resultado: false



// var edad = 18;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// }


// var hora = 12;

// if (hora < 12) {
//   console.log("Buenos días");
// } else {
//   console.log("Buenas tardes");
// }


// var numero = 0;

// if (numero > 0) {
//   console.log("El número es positivo");
// } else if (numero < 0) {
//   console.log("El número es negativo");
// } else {
//   console.log("El número es cero");
// }

// for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }

// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }


// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);


// switch (valor) {
//   case caso1:
//     // código a ejecutar si el valor coincide con caso1
//     break;
//   case caso2:
//     // código a ejecutar si el valor coincide con caso2
//     break;
//   case caso3:
//     // código a ejecutar si el valor coincide con caso3
//     break;
//   // puedes agregar más casos si es necesario
//   default:
//     // código a ejecutar si ninguno de los casos coincide con el valor
//     break;
// }


// let dia = "lunes";
// let mensaje;

// switch (dia) {
//   case "lunes":
//   case "martes":
//   case "miércoles":
//   case "jueves":
//   case "viernes":
//     mensaje = "Es un día de la semana laboral.";
//     break;
//   case "sábado":
//   case "domingo":
//     mensaje = "Es un fin de semana.";
//     break;
//   default:
//     mensaje = "No es un día válido.";
//     break;
// }

// console.log(mensaje); // Salida: "Es un día de la semana laboral."


// try {
//     // Código que podría generar una excepción
//     const resultado = 10 / 0;
//     console.log(resultado);
//   } catch (error) {
//     // Capturar y manejar la excepción
//     console.log('Se produjo un error:', error);
//   }
  

// try {
//     // Código que podría generar una excepción
//     const arreglo = [1, 2, 3];
//     console.log(arreglo[5]);
//   } catch (error) {
//     // Capturar y manejar la excepción
//     if (error instanceof TypeError) {
//       console.log('Error de tipo:', error);
//     } else if (error instanceof RangeError) {
//       console.log('Error de rango:', error);
//     } else {
//       console.log('Error no identificado:', error);
//     }
//   }
  

// try {
//     // Código que podría generar una excepción
//     const arreglo = [1, 2, 3];
//     console.log(arreglo[5]);
//   } catch (error) {
//     // Capturar y manejar la excepción
//     if (error instanceof TypeError) {
//       console.log('Error de tipo:', error);
//     } else if (error instanceof RangeError) {
//       console.log('Error de rango:', error);
//     } else {
//       console.log('Error no identificado:', error);
//     }
//   }
  


// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break; // Sale del bucle cuando i es igual a 3
//     }
//     console.log(i);
//   }
//   // Salida: 0, 1, 2
  



// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue; // Salta la iteración cuando i es igual a 2
//     }
//     console.log(i);
//   }
//   // Salida: 0, 1, 3, 4
  


// const persona = {
//     nombre: 'John',
//     apellido: 'Doe',
//     edad: 30
//   };
  
//   // Destructuración de un objeto
//   const { nombre, apellido, edad } = persona;
  
//   console.log(nombre);   // Output: John
//   console.log(apellido); // Output: Doe
//   console.log(edad);     // Output: 30
  

// const numeros = [1, 2, 3, 4, 5];

// // Destructuración de un arreglo
// const [primero, segundo, ...resto] = numeros;

// console.log(primero); // Output: 1
// console.log(segundo); // Output: 2
// console.log(resto);   // Output: [3, 4, 5]




// Definición de un objeto literal
// const persona = {
//     nombre: 'John',
//     apellido: 'Doe',
//     edad: 30,
//     saludar: function() {
//       console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}. Tengo ${this.edad} años.`);
//     }
//   };
  


// console.log(persona.nombre);     // Output: John
// console.log(persona['apellido']); // Output: Doe

// persona.saludar(); // Output: Hola, mi nombre es John Doe. Tengo 30 años.


// persona.ocupacion = 'Desarrollador';
// persona.edad = 31;

// console.log(persona.ocupacion); // Output: Desarrollador
// console.log(persona.edad);      // Output: 31


// function sumar(...numeros) {
//     let total = 0;
//     for (let numero of numeros) {
//       total += numero;
//     }
//     return total;
//   }
  
//   console.log(sumar(1, 2, 3)); // Output: 6
//   console.log(sumar(4, 5, 6, 7)); // Output: 22
  

// const numeros = [1, 2, 3];
// const copiaNumeros = [...numeros];

// console.log(copiaNumeros); // Output: [1, 2, 3]

// const nombres1 = ['Juan', 'María'];
// const nombres2 = ['Pedro', 'Ana'];
// const todosLosNombres = [...nombres1, ...nombres2];

// console.log(todosLosNombres); // Output: ['Juan', 'María', 'Pedro', 'Ana']


// Sintaxis básica de una arrow function
// const miFuncion = (parametro1, parametro2) => {
//     // Cuerpo de la función
//     // Puedes hacer múltiples operaciones aquí
//     return resultado;
//   };
  

// Arrow function simple
// const saludar = nombre => console.log(`Hola, ${nombre}!`);

// saludar("Juan"); // Output: Hola, Juan!


// Arrow function con una sola expresión
// const duplicar = numero => numero * 2;

// console.log(duplicar(5)); // Output: 10

// // Arrow function sin parámetros
// const obtenerFechaActual = () => new Date();

// console.log(obtenerFechaActual()); // Output: Fecha actual


