export function MisArrays () {
    let Numeros = [1,2,3,4,5,6,7,8,9]
    let Alfabeto = ["a","b","c","d","f","g"]
    let Nombres = ["Anna","Sofia", "Pedro", "Mariano"]
}

export function ArraysReferencias () {
    const frutas = ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"];

    frutas.push("limón");
    console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón", "limón"]
    
    frutas.pop();
    console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

    frutas.shift();
    console.log(frutas); // ["naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]


    frutas.unshift("manzana");
    console.log(frutas); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

    frutas.splice(3, 2, "pera", "durazno");
    console.log(frutas); // ["manzana", "naranja", "plátano", "pera", "durazno", "piña", "mango", "uva", "sandía", "melón"]

    const nuevasFrutas = frutas.slice(2, 5);
    console.log(nuevasFrutas); // ["plátano", "pera", "durazno"]

    const cadenaDeFrutas = frutas.join(" - ");
    console.log(cadenaDeFrutas); // "manzana - naranja - plátano - pera - durazno - piña - mango - uva - sandía - melón"

    const indiceDeNaranja = frutas.indexOf("naranja");
    console.log(indiceDeNaranja); // 1

    frutas.forEach(function(fruta, indice) {
    console.log(`Índice ${indice}: ${fruta}`);
    });

    // Índice 0: manzana
    // Índice 1: naranja
    // Índice 2: plátano
    // Índice 3: kiwi
    // Índice 4: fresa
    // Índice 5: piña
    // Índice 6: mango
    // Índice 7: uva
    // Índice 8: sandía
    // Índice 9: melón

    const array1 = ["manzana", "naranja", "plátano"];
    const array2 = ["kiwi", "fresa", "piña"];
    const array3 = ["mango", "uva", "sandía", "melón"];

    const tieneManzana = frutas.includes('manzana');
    console.log(tieneManzana); // true

    const frutas2 = array1.concat(array2, array3);
    console.log(frutas2); // ["manzana", "naranja", "plátano", "kiwi", "fresa", "piña", "mango", "uva", "sandía", "melón"]

    frutas.reverse();
    console.log(frutas); // ["plátano", "naranja", "manzana"]   

    const numeros = [1, 2, 3, 4, 5];
    const pares = numeros.filter(numero => numero % 2 === 0);
    console.log(pares); // [2, 4]

    const suma = numeros.reduce((acumulador, numero) => acumulador + numero);
    console.log(suma); // 15    

    const algunImpar = numeros.some(numero => numero % 2 === 1);
    console.log(algunImpar); // true


    const numeroMayorQueDiez = numeros.find(function(numero) {
    return numero > 3;
    });

    console.log(numeroMayorQueDiez); // 15

    
}



