const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);
const nombreFuncion = argumentos[0] ? argumentos[0].toLowerCase() : null;

if (!nombreFuncion) {
    console.log('Debe ingresar la palabra "registrar" o "leer".');
} else {
    switch (nombreFuncion) {
        case 'registrar':
            if (argumentos.length === 6) {
                registrar(...argumentos.slice(1));
            } else {
                console.log('Número incorrecto de argumentos para "registrar". INGRESAR NOMBRE, EDAD, TIPO MASCOTA, COLOR Y ENFERMEDAD');
            }
            break;

        case 'leer':
            leer();
            break;

        default:
            console.log('Función no reconocida. Debe ingresar "registrar" o "leer".');
    }
}