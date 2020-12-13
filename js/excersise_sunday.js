while (i>=5 && i<10) {
    console.log(i)
    i++
}


do {
    i = i + 1;
    result = result + i;
} while (i < 5);
console.log(result);


//ejemplo de function
//hay que checar al dar valores, por ejemplo al concatenar, el orden de los parámetros
function concatName(name, lastName = 'Por definir'){
    console.log(name, lastName);
}
concatName('Mike')