const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);

if(argumentos[0] === 'registrar'){
    registrar(argumentos[1], argumentos[2],argumentos[3], argumentos[4], argumentos[5])
} else if(argumentos[0] === 'leer'){
    leer();
} else{
    console.log('Debe ingresar la palabra registrar o leer.')
}