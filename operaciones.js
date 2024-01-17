
const { Console } = require('console');
const fs = require('fs');

let miArreglo = [];
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
     if(fs.existsSync('citas.json')){
        // Se lee, extrae y transforma json en string
        let visitas = (fs.readFileSync('citas.json', 'utf-8'))
        miArreglo = JSON.parse(visitas)
    
        // Se unen nueva mascota a listado de citas
        const citas = [...miArreglo, mascota]
        
        fs.writeFileSync('citas.json',JSON.stringify(citas))
        console.log('======================= NUEVA CITA AGENDADA =========================')
        // citas.forEach((cita,index) => {
        //     console.log(`Cita N° ${index +1}`, cita)
        //     console.log('---------------------------------------------------')
        // })
     }else{
        fs.writeFileSync('citas.json', JSON.stringify([mascota]));
        // console.log( mascota)
        console.log('Archivo citas creado.');
        console.log('======================= NUEVA CITA AGENDADA =========================')
     }
     console.log( mascota)
   }catch(e){
    console.error(`Error al cargar archivo: ${e}.`);
   }
}

const leer = () => {
  try{
    //Se lee y muestra el contenido de citas.json
    const leido =  fs.readFileSync('citas.json', 'utf-8');
    const arreglotring = JSON.parse(leido);
    if(arreglotring.length > 0){
        console.log('-------------------------------------------------------------------------------')
        console.log('-------------------- REGISTRO DE CITAS - VETERINARIA JS -----------------------')
        console.log('-------------------------------------------------------------------------------')
        
        arreglotring.forEach((element,index) => {
            console.log(`Imprimiendo cita N° ${index + 1}:`, element)
            console.log('-------------------------------------------------------------------------------')   
        });
    }else{
        console.log('No existen citas registradas en nuestros archivos.')
    }
  }catch (e){
    console.error(`Error al leer archivo: ${e}.`)
  }
}

module.exports = {registrar, leer}


