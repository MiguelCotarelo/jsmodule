// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola
console.log('Saber si un número es par o impar')
const NUMBER_PAR = prompt(`Dame un número`)
if (NUMBER_PAR % 2) {
    console.log(`${NUMBER_PAR} es un número Par`)
    } else {
        console.log(`${NUMBER_PAR} es un número impar`)
    }