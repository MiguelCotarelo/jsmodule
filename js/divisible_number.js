// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo
console.log('Saber si un número es divisible entre 2 y 11')
const DIVISIBLE = prompt(`Dame un número entre 1 y 100`)
if (DIVISIBLE % 2) {
    if (DIVISIBLE % 11) {
        console.log(`${DIVISIBLE} es un número divisible entre 2 y 11`)
    } else {
        console.log(`${DIVISIBLE} sólo es divisible entre 2`)
    }
} else 
if (DIVISIBLE % 11) {
    console.log(`${DIVISIBLE} sólo es divisible entre 11`)
} else {
    console.log(`${DIVISIBLE} no es divisible entre 2 y 11`)
}