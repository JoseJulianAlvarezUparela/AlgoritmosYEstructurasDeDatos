// Algoritmos de búsqueda 

// function busquedaLineal(lista, objetivo) {
//     // Recorre la lista de elementos, comparando cada elemento con el objetivo.
//     for (let i = 0; i < lista.length; i++) {
//       // Si encuentra un elemento que coincide con el objetivo, devuelve la posición del elemento en la lista.
//       if (lista[i] === objetivo) {
//         return i;
//       }
//     }
//     // Si no encuentra ningún elemento que coincida con el objetivo, devuelve None.
//     return null;
//   }
  
// function busquedaLinealCentinela(lista, objetivo) {
//     // Añade un elemento centinela al final de la lista.
//     lista.push(Infinity);
  
//     // Recorre la lista, comparando cada elemento con el objetivo.
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === objetivo) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
  

// function busquedaBinaria(lista, objetivo) {
//     // Inicializa el índice inferior y superior.
//     let inferior = 0;
//     let superior = lista.length - 1;
  
//     // Mientras el índice inferior sea menor o igual al índice superior, itera sobre la lista.
//     while (inferior <= superior) {
//       // Calcula el índice medio de la lista.
//       let medio = (inferior + superior) / 2;
  
//       // Si el elemento buscado es igual al elemento del medio, devuelve el índice medio.
//       if (lista[medio] === objetivo) {
//         return medio;
//       } else if (lista[medio] < objetivo) {
//         // El elemento buscado es mayor que el elemento del medio, por lo que el algoritmo busca en la mitad superior de la lista.
//         inferior = medio + 1;
//       } else {
//         // El elemento buscado es menor que el elemento del medio, por lo que el algoritmo busca en la mitad inferior de la lista.
//         superior = medio - 1;
//       }
//     }
  
//     // Si el algoritmo llega a este punto, el elemento buscado no se encuentra en la lista.
//     return -1;
//   }
  

// function busquedaMetaBinaria(lista, objetivo, puntoInicio) {
//     // Inicializa el índice inferior y superior.
//     let inferior = puntoInicio;
//     let superior = lista.length - 1;
  
//     // Mientras el índice inferior sea menor o igual al índice superior, itera sobre la lista.
//     while (inferior <= superior) {
//       // Calcula el índice medio de la lista.
//       let medio = Math.floor((inferior + superior) / 2);
  
//       // Si el elemento buscado es igual al elemento del medio, devuelve el índice medio.
//       if (lista[medio] === objetivo) {
//         return medio;
//       } else if (lista[medio] < objetivo) {
//         // El elemento buscado es mayor que el elemento del medio, por lo que el algoritmo busca en la mitad superior de la lista.
//         inferior = medio + 1;
//       } else {
//         // El elemento buscado es menor que el elemento del medio, por lo que el algoritmo busca en la mitad inferior de la lista.
//         superior = medio - 1;
//       }
//     }
  
//     // Si el algoritmo llega a este punto, el elemento buscado no se encuentra en la lista.
//     return -1;
//   }
  

// function busquedaTernaria(lista, objetivo) {
//     // Encuentra el punto medio de la lista.
//     let medio = Math.floor((lista.length - 1) / 3);
  
//     // Si el elemento buscado es igual al elemento del medio, devuelve el índice del punto medio.
//     if (lista[medio] === objetivo) {
//       return medio;
//     }
  
//     // Si el elemento buscado es menor que el elemento del medio, busca en la mitad inferior de la lista.
//     else if (lista[medio] > objetivo) {
//       return busquedaTernaria(lista.slice(0, medio), objetivo);
//     }
  
//     // Si el elemento buscado es mayor que el elemento del medio, busca en la mitad superior de la lista.
//     else {
//       return busquedaTernaria(lista.slice(medio + 1), objetivo);
//     }
//   }
  
// function busquedaSalto(lista, objetivo) {
//     // Calcula el salto inicial.
//     let salto = Math.floor(Math.log(lista.length) / Math.log(2));
  
//     // Compara el elemento en la posición del salto inicial con el elemento buscado.
//     let posicion = salto;
//     while (lista[posicion] !== objetivo && posicion < lista.length) {
//       posicion += salto;
//     }
  
//     // Si el elemento buscado no se encuentra en la lista, devuelve -1.
//     if (posicion >= lista.length) {
//       return -1;
//     }
  
//     // Si el elemento buscado se encuentra en la lista, devuelve la posición del elemento.
//     return posicion;
//   }
  

// function busquedaInterpolación(lista, objetivo) {
//     // Inicializa el índice inferior y superior.
//     let inferior = 0;
//     let superior = lista.length - 1;
  
//     // Mientras el índice inferior sea menor o igual al índice superior, itera sobre la lista.
//     while (inferior <= superior) {
//       // Calcula la posición estimada del elemento buscado.
//       let posicionEstimada = inferior + Math.floor((superior - inferior) / (lista[superior] - lista[inferior]) * (objetivo - lista[inferior]));
  
//       // Si el elemento en la posición estimada es igual al elemento buscado, devuelve el índice de la posición estimada.
//       if (lista[posicionEstimada] === objetivo) {
//         return posicionEstimada;
//       } else if (lista[posicionEstimada] < objetivo) {
//         // El elemento buscado es mayor que el elemento de la posición estimada, por lo que el algoritmo busca en la mitad superior de la lista.
//         inferior = posicionEstimada + 1;
//       } else {
//         // El elemento buscado es menor que el elemento de la posición estimada, por lo que el algoritmo busca en la mitad inferior de la lista.
//         superior = posicionEstimada - 1;
//       }
//     }
  
//     // Si el algoritmo llega a este punto, el elemento buscado no se encuentra en la lista.
//     return -1;
//   }
  

// function busquedaExponencial(lista, objetivo) {
//     // Calcula el factor de salto.
//     let factorDeSalto = 2;
  
//     // Compara el elemento en la posición del factor de salto con el elemento buscado.
//     let posicion = factorDeSalto;
//     while (lista[posicion] !== objetivo && posicion < lista.length) {
//       posicion = posicion * factorDeSalto;
//     }
  
//     // Si el elemento buscado no se encuentra en la lista, devuelve -1.
//     if (posicion >= lista.length) {
//       return -1;
//     }
  
//     // Si el elemento buscado se encuentra en la lista, devuelve la posición del elemento.
//     return posicion;
//   }
  

// function busquedaFibonacci(lista, objetivo) {
//     // Calcula los primeros números de Fibonacci.
//     const fibonacci = [0, 1];
//     for (let i = 2; i < lista.length; i++) {
//       fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//     }
  
//     // Compara el elemento en la posición del número de Fibonacci actual con el elemento buscado.
//     let posicion = fibonacci[0];
//     while (posicion < lista.length && lista[posicion] !== objetivo) {
//       posicion = fibonacci[posicion + 1] - fibonacci[posicion];
//     }
  
//     // Si el elemento buscado no se encuentra en la lista, devuelve -1.
//     if (posicion >= lista.length) {
//       return -1;
//     }
  
//     // Si el elemento buscado se encuentra en la lista, devuelve la posición del elemento.
//     return posicion;
//   }
  
function busquedaBinariaUbicua(lista, objetivo) {
    // Encuentra el índice del elemento más cercano al elemento buscado.
    let inferior = 0;
    let superior = lista.length - 1;
    let posicion = Math.floor((inferior + superior) / 2);
    while (lista[posicion] !== objetivo && inferior <= superior) {
      if (lista[posicion] < objetivo) {
        inferior = posicion + 1;
      } else {
        superior = posicion - 1;
      }
      posicion = Math.floor((inferior + superior) / 2);
    }
  
    // Devuelve el índice del elemento más cercano.
    return posicion;
  }
  