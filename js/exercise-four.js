//imprimir tabla del 8 en reversa
/*
console.log(`Tabla de multiplicar del 8`)

for(let i=10; i >= 1; i--){
    console.log(`8 x ${i} = ${8 * i}`)
}

//${} Esto es un place holder

*/ 

//imprimir los número pares entre 1 y 100

//con for
console.log(`Pares del 1 al 100`)

for(let i=0; i<=100; i++){
    if (i%2===0) {
        console.log(i)
    } 
}


//Con While o Do While
let i=0
while(i <=100){
    if (i%2===0) {
        console.log(i)
    }
    i++
}


//dado un string "reverse" -> esrever
// invertir el orden e imprimir en consola

//con for
console.log(`Invertir cadena`)
let stringReverse = 'Hola mundo'
let rev = ''
for(i=stringReverse.length-1; i>=0; i--){
    rev = rev.concat(stringReverse[i])
}
console.log(rev)

//con While
const stringToReverse = "Hola Mundo"
let stringReversed = ''
let counterRev = stringToReverse.length - 1
while(counterDo >= 0){
    stringReversed += stringToReverse[counterDo]
    counter --
}
console.log(stringReversed)



//ejercicio while
let counter = 1
while(counter <= 10){
    console.log(`7 x ${counter} = ${7 * counter}`)
    counter = counter + 1
}

//do while

let counterDo = 1
do {
    //sentencias
    console.log(`7 X ${counterDo} = ${7 * counterDo}`)
    counterDo++ //contador
} while(counterDo < 10)
