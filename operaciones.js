
const fs = require('fs');

const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
//    leer CredentialsContainer.json
    const mascota = 
    {
        nombreMascota: nombreAnimal,
        edad: edad,
        tipoMascota: tipoAnimal,
        colorMascota: colorAnimal,
        enfermedad: enfermedad
    }
    let arregloCitas = [];
    let visitas = (fs.readFileSync('citas.json', 'utf-8'))
    
    const miArreglo = JSON.parse(visitas)
    
     arregloCitas.push(miArreglo)
     arregloCitas.push(mascota)
    console.log(arregloCitas)
    
    // const citas = miArreglo.push(mascota);
    fs.writeFileSync('citas.json',JSON.stringify(arregloCitas))
    console.log('archivo actualizado')
}

const leer = () => {
  const leido =  fs.readFileSync('citas.json', 'utf-8');
    console.log(JSON.parse(leido))
}

module.exports = {registrar, leer}


