
const fs = require('fs');

const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
    // se crea objeto mascota
    const mascota = 
    {
        nombreMascota: nombreAnimal,
        edad: edad,
        tipoMascota: tipoAnimal,
        colorMascota: colorAnimal,
        enfermedad: enfermedad
    }
    
   try{
     // Se lee, extrae y transforma json en string
     let visitas = (fs.readFileSync('citas.json', 'utf-8'))
     const miArreglo = JSON.parse(visitas)
 
     // Se unen nueva mascota a listado de citas
     const citas = [...miArreglo, mascota]
    
     
     fs.writeFileSync('citas.json',JSON.stringify(citas))
     console.log('Archivo actualizado con nueva cita.');
   }catch(e){
    console.error(`Error al cargar archivo: ${e}.`);
   }
}

const leer = () => {
  try{
    //Se lee y muestra el contenido de citas.json
    const leido =  fs.readFileSync('citas.json', 'utf-8');
    console.log(JSON.parse(leido))
  }catch (e){
    console.error(`Error al leer archivo: ${e}.`)
  }
}

module.exports = {registrar, leer}


