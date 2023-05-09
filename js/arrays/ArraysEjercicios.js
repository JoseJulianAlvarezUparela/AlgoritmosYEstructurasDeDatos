// La función "encontrarTresMasGrandes" toma una matriz como argumento.
export function encontrarTresMasGrandes(matriz) {

  // Se define un arreglo "V" con algunos valores de ejemplo.
  let V = [ 11, 65, 193, 36, 1200, 209, 664, 32 ];
  
  // Se utiliza el método "sort" para ordenar los elementos del arreglo "V" en orden ascendente.

  // La función de comparación "(a, b) => a - b" resta "b" de "a", lo que significa que el arreglo se ordenará en orden ascendente.
  V.sort((a, b) => a - b);
  
  // Se utiliza el método "reverse" para invertir el orden de los elementos en el arreglo "V".
  V.reverse();

  // Se imprimen los tres elementos más grandes del arreglo "V" en la consola.
  console.log(`primero ${V[0]}, segundo ${V[1]}, tercero ${V[2]}`); // primero 1200, segundo 664, tercero 209
  
}

// Encuentra el segundo elemento más grande en una matriz 

export function EncntrarElSegundoMasGrande(){

  let v = [1,2,3,4,5,6,7,8,9]

  v.sort((a,b) => a - b - 2);

  console.log(`El más grande es ${v[1]}`);

}

// Mover Todos Los Ceros Al Final De La Matriz 

export function LosCerosoAlFinal() {

  let v = [0,0,0,1,2,3,4,5,6,7,8,9]

  // Inicializar el puntero al inicio de la matriz.
  let contador = 0;

  // Iterar sobre la matriz.
  for(let i = 0; i < v.length; i++){

     // Si el elemento actual no es cero, moverlo a la posición del puntero y avanzar el puntero.

    if(v[i] !== 0) {

      v[contador] = v[i];
      contador ++;
    }
  }

  // Llenar el resto de la matriz con ceros a partir de la posición del puntero.
  while (contador < v.length) {

    v[contador] = 0;
    contador++;

  }

  console.log(v); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
}



