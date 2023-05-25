// TEORIA 

// function MisArrays () {
//     let Numeros = [1,2,3,4,5,6,7,8,9]
//     let Alfabeto = ["a","b","c","d","f","g"]
//     let Nombres = ["Anna","Sofia", "Pedro", "Mariano"]
// }

// function ArraysReferencias () {
//     const frutas = ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"];

//     frutas.push("limón");
//     console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón", "limón"]
    
//     frutas.pop();
//     console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

//     frutas.shift();
//     console.log(frutas); // ["naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]


//     frutas.unshift("manzana");
//     console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

//     frutas.splice(3, 2, "pera", "durazno");
//     console.log(frutas); // ["manzana", "naranja", "plátano", "pera", "durazno", "piña", "mango", "uva", "sandía", "melón"]

//     const nuevasFrutas = frutas.slice(2, 5);
//     console.log(nuevasFrutas); // ["plátano", "pera", "durazno"]

//     const cadenaDeFrutas = frutas.join(" - ");
//     console.log(cadenaDeFrutas); // "manzana - naranja - plátano - pera - durazno - piña - mango - uva - sandía - melón"

//     const indiceDeNaranja = frutas.indexOf("naranja");
//     console.log(indiceDeNaranja); // 1

//     frutas.forEach(function(fruta, indice) {
//     console.log(`Índice ${indice}: ${fruta}`);
//     });

//     // Índice 0: manzana
//     // Índice 1: naranja
//     // Índice 2: plátano
//     // Índice 3: kiwi
//     // Índice 4: fresa
//     // Índice 5: piña
//     // Índice 6: mango
//     // Índice 7: uva
//     // Índice 8: sandía
//     // Índice 9: melón

//     const array1 = ["manzana", "naranja", "plátano"];
//     const array2 = ["kiwi", "fresa", "piña"];
//     const array3 = ["mango", "uva", "sandía", "melón"];

//     const tieneManzana = frutas.includes('manzana');
//     console.log(tieneManzana); // true

//     const frutas2 = array1.concat(array2, array3);
//     console.log(frutas2); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

//     frutas.reverse();
//     console.log(frutas); // ["plátano", "naranja", "manzana"]   

//     const numeros = [1, 2, 3, 4, 5];
//     const pares = numeros.filter(numero => numero % 2 === 0);
//     console.log(pares); // [2, 4]

//     const suma = numeros.reduce((acumulador, numero) => acumulador + numero);
//     console.log(suma); // 15    

//     const algunImpar = numeros.some(numero => numero % 2 === 1);
//     console.log(algunImpar); // true


//     const numeroMayorQueDiez = numeros.find(function(numero) {
//     return numero > 3;
//     });

//     console.log(numeroMayorQueDiez); // 15
    
// }

















// EJERCICIOS 


// La función "encontrarTresMasGrandes" toma una matriz como argumento.
/* const  encontrarTresMasGrandes = function (matriz) {

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

encontrarTresMasGrandes()

// Encuentra el segundo elemento más grande en una matriz 

const EncntrarElSegundoMasGrande = function(){

    let v = [1,2,3,4,5,6,7,8,9]
    
v.sort((a,b) => a - b - 2);

console.log(`El más grande es ${v[1]}`);

}

EncntrarElSegundoMasGrande();

// Mover Todos Los Ceros Al Final De La Matriz 

const LosCerosoAlFinal = function() {

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

LosCerosoAlFinal() */

  
  
// Reorganizar La Matriz De Manera Que Las Posiciones Pares Sean Mayores Que Las Impares
// Reorganizar Una Matriz En Forma Máxima Mínima Utilizando La Técnica De Dos Punteros
// Segregar Números Pares E Impares
// Algoritmo De Inversión Para La Rotación De Matrices
// Imprime La Rotación A La Izquierda De La Matriz En El Tiempo O(N) Y El Espacio O(1)
// Ordenar Una Matriz En Forma De Onda
// Ordenar Una Matriz Que Contiene De 1 A N Valores
// Contar El Número De Triángulos Posibles
// Imprimir Todos Los Elementos Distintos De Una Matriz De Enteros Dada
// Encuentre El Elemento Que Aparece Una Vez En Array Donde Todos Los Demás Elementos Aparecen Dos Veces
// Líderes En Una Matriz
// Encuentra Un Subarreglo Con La Suma Dada
// Medio
// Encuentra Los Tres Elementos Más Grandes En Una Matriz
// Encuentra El Segundo Elemento Más Grande En Una Matriz
// Mover Todos Los Ceros Al Final De La Matriz
// Reorganizar La Matriz De Manera Que Las Posiciones Pares Sean Mayores Que Las Impares
// Reorganizar Una Matriz En Forma Máxima Mínima Utilizando La Técnica De Dos Punteros
// Segregar Números Pares E Impares
// Algoritmo De Inversión Para La Rotación De Matrices
// Imprime La Rotación A La Izquierda De La Matriz En El Tiempo O(N) Y El Espacio O(1)
// Ordenar Una Matriz En Forma De Onda
// Ordenar Una Matriz Que Contiene De 1 A N Valores
// Contar El Número De Triángulos Posibles
// Imprimir Todos Los Elementos Distintos De Una Matriz De Enteros Dada
// Encuentre El Elemento Que Aparece Una Vez En Array Donde Todos Los Demás Elementos Aparecen Dos Veces
// Líderes En Una Matriz
// Encuentra Un Subarreglo Con La Suma Dada
// Reorganizar Una Matriz Tal Que Arr[I] = I
// Reorganiza Números Positivos Y Negativos En Tiempo O(N) Y Espacio Extra O(1)
// Reordenar Una Matriz De Acuerdo Con Los Índices Dados
// Buscar Un Elemento En Una Matriz Ordenada Y Rotada
// Encuentre El Recuento De Rotación En La Matriz Ordenada Rotada
// K-Ésimo Subarreglo Contiguo De Suma Más Grande
// Encuentra El Menor Número Que Falta
// Matriz De Diferencias | Consulta De Actualización De Rango En O(1)
// Beneficio Máximo Comprando Y Vendiendo Una Acción Como Máximo Dos Veces
// El Subarreglo Más Pequeño Con Una Suma Mayor Que Un Valor Dado
// Conteo De Inversión En Array Usando Merge Sort
// Ordenar Una Matriz De 0s, 1s Y 2s
// Combinar Dos Matrices Ordenadas Con O(1) Espacio Adicional
// Elemento Mayoritario
// Técnica De Dos Punteros
// Encuentra Un Elemento Pico
// Encuentra Un Triplete Que Sume Un Valor Dado
// Incremento Mínimo Por K Operaciones Para Igualar Todos Los Elementos
// Índice De Equilibrio De Una Matriz
// Dificil
// Encuentre K Números Con La Mayoría De Las Ocurrencias En La Matriz Dada
// Algoritmo De MO
// Algoritmo De Descomposición De Raíz Cuadrada (Sqrt)
// Tabla Dispersa
// Consulta De Suma De Rango Usando Tabla Dispersa
// Consulta De Rango Mínimo (Descomposición De Raíz Cuadrada Y Tabla Dispersa)
// Consultas LCM De Rango
// Combinar Clasificación De Árbol Para Estadísticas De Orden De Rango
// Número Mínimo De Saltos Para Llegar Al Final
// Optimización Del Espacio Usando Manipulaciones De Bits
// Ordenar Una Matriz Casi Ordenada (O K Ordenada)
// Encuentre El Valor Máximo De Sum(I*Arr[I]) Con Solo Rotaciones En Una Matriz Dada Permitida
// Mediana En Una Secuencia De Enteros (Enteros En Ejecución)
// Construya Una Matriz A Partir De Su Matriz De Suma De Pares
// Suma Máxima De Equilibrio En Una Matriz
// Triplete De Diferencia Más Pequeño De Tres Matrices
// Encuentra Todos Los Tripletes Con Suma Cero
