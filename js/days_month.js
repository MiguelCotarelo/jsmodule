// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días
console.log('Días que tiene cada mes')
const MONTH = prompt(`Dame un número del 1 al 12`)
switch(MONTH){
    case '1':
        console.log(`Enero tiene 31 días`)
    break
    case '2':
        console.log(`Febrero tiene 28 días y en año bisiesto 29`)
    break
    case '3':
        console.log(`Marzo tiene 31 días`)
    break
    case '4':
        console.log(`Abril tiene 30 días`)
    break
    case '5':
        console.log(`Mayo tiene 31 días`)
    break
    case '6':
        console.log(`Junio tiene 30 días`)
    break
    case '7':
        console.log(`Julio tiene 31 días`)
    break
    case '8':
        console.log(`Agosto tiene 31 días`)
    break
    case '9':
        console.log(`Septiembre tiene 30 días`)
    break
    case '10':
        console.log(`Octubre tiene 31 días`)
    break
    case '11':
        console.log(`Noviembre tiene 30 días`)
    break
    case '12':
        console.log(`Diciembre tiene 31 días`)
    break
    default:
        let invalidOption = prompt('Tu opción no es válida')
        console.log(invalidOption)
}