console.log('Estado del clima')
// const WEATHER = prompt(`¿Cómo está el clima?`)
// let soleado = prompt(`Dime como está el clima: soleado, lluvioso, nevado, nublado u otro`)
// let lluvioso
// let nevado
// let nublado
const WEATHER = prompt(`Dime como está el clima: soleado, lluvioso, nevado, nublado u otro`)


if (WEATHER === 'soleado') {
    console.log(`El calor está de locos`)

} else if (WEATHER === 'lluvioso') {
    console.log(`Espero que traigas paragüas`)

} else if (WEATHER === 'nevado') {
    console.log(`Una chamarra no te caería mal`)

} else if (WEATHER === 'nublado') {
    console.log(`Que delicia de clima`)

} else {
    const WEATHER_DESCRIPTION = prompt('Dame una descripción del clima')
    console.log(WEATHER_DESCRIPTION)
}