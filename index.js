const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);
const nombreFuncion = argumentos[0].toLowerCase();
console.log(nombreFuncion);
if(nombreFuncion === 'registrar'){
    registrar(argumentos[1], argumentos[2],argumentos[3], argumentos[4], argumentos[5])
} else if(nombreFuncion === 'leer'){
    leer();
} else{
    console.log('Debe ingresar la palabra registrar o leer.')
}