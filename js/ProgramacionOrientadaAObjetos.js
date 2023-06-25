// // Definición de una clase
// class Persona {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
    
//     saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//     }
//   }
  
//   // Creación de objetos
//   const persona1 = new Persona('Juan', 25);
//   const persona2 = new Persona('María', 30);
  
// //   // Acceso a propiedades y métodos
// //   console.log(persona1.nombre); // Juan
// //   persona2.saludar(); // Hola, mi nombre es María y tengo 30 años.


// class Estudiante extends Persona {
//     constructor(nombre, edad, grado) {
//       super(nombre, edad);
//       this.grado = grado;
//     }
    
//     estudiar() {
//       console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
//     }
//   }
  
//   const estudiante1 = new Estudiante('Pedro', 20, '12º');
//   estudiante1.saludar(); // Hola, mi nombre es Pedro y tengo 20 años.
//   estudiante1.estudiar(); // Pedro está estudiando en el grado 12º.
  


// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
  
//   Persona.prototype.saludar = function() {
//     console.log('Hola, mi nombre es ' + this.nombre);
//   };
  
//   var persona1 = new Persona('Juan', 30);
//   persona1.saludar(); // Imprime: Hola, mi nombre es Juan
  

// function Vehiculo(marca, modelo) {
//     this.marca = marca;
//     this.modelo = modelo;
//   }
  
//   Vehiculo.prototype.informacion = function() {
//     console.log('Marca: ' + this.marca + ', Modelo: ' + this.modelo);
//   };
  
//   function Coche(marca, modelo, color) {
//     Vehiculo.call(this, marca, modelo);
//     this.color = color;
//   }
  
//   Coche.prototype = Object.create(Vehiculo.prototype);
//   Coche.prototype.constructor = Coche;
  
//   Coche.prototype.informacionExtendida = function() {
//     this.informacion();
//     console.log('Color: ' + this.color);
//   };
  
//   var coche1 = new Coche('Toyota', 'Corolla', 'Rojo');
//   coche1.informacionExtendida();
//   // Imprime:
//   // Marca: Toyota, Modelo: Corolla
//   // Color: Rojo
  



// function Vehiculo(marca, modelo) {
//     this.marca = marca;
//     this.modelo = modelo;
//   }
  
//   Vehiculo.prototype.informacion = function() {
//     console.log('Marca: ' + this.marca + ', Modelo: ' + this.modelo);
//   };
  
//   function Coche(marca, modelo, color) {
//     Vehiculo.call(this, marca, modelo);
//     this.color = color;
//   }
  
//   Coche.prototype = Object.create(Vehiculo.prototype);
//   Coche.prototype.constructor = Coche;
  
//   Coche.prototype.informacionExtendida = function() {
//     this.informacion();
//     console.log('Color: ' + this.color);
//   };
  
//   var coche1 = new Coche('Toyota', 'Corolla', 'Rojo');
//   coche1.informacionExtendida();
//   // Imprime:
//   // Marca: Toyota, Modelo: Corolla
//   // Color: Rojo
  




// // Definición del objeto padre
// var animal = {
//     tipo: 'Desconocido',
//     describir: function() {
//       console.log('Este es un ' + this.tipo);
//     }
//   };
  
//   // Creación de un nuevo objeto que hereda de "animal"
//   var perro = Object.create(animal);
//   perro.tipo = 'Perro';
//   perro.ladrar = function() {
//     console.log('¡Guau, guau!');
//   };
  
//   perro.describir(); // Imprime: Este es un Perro
//   perro.ladrar(); // Imprime: ¡Guau, guau!
  


// Definición de la clase padre
// class Animal {
//     constructor(tipo) {
//       this.tipo = tipo;
//     }
  
//     describir() {
//       console.log('Este es un ' + this.tipo);
//     }
//   }
  
//   // Definición de la clase hija que hereda de Animal
//   class Perro extends Animal {
//     constructor(tipo, raza) {
//       super(tipo);
//       this.raza = raza;
//     }
  
//     ladrar() {
//       console.log('¡Guau, guau!');
//     }
//   }
  
//   // Creación de una instancia de la clase hija
//   var miPerro = new Perro('Perro', 'Labrador');
  
//   miPerro.describir(); // Imprime: Este es un Perro
//   miPerro.ladrar(); // Imprime: ¡Guau, guau!
//   console.log(miPerro.raza); // Imprime: Labrador
  


// class Utilidades {
//     static duplicar(numero) {
//       return numero * 2;
//     }
//   }
  
//   console.log(Utilidades.duplicar(5)); // Imprime: 10
  

// class Persona {
//     constructor(nombre) {
//       this._nombre = nombre;
//     }
  
//     get nombre() {
//       return this._nombre.toUpperCase();
//     }
  
//     set nombre(nuevoNombre) {
//       this._nombre = nuevoNombre;
//     }
//   }
  
//   var persona = new Persona('Juan');
//   console.log(persona.nombre); // Imprime: JUAN
  
//   persona.nombre = 'Pedro';
//   console.log(persona.nombre); // Imprime: PEDRO
  

