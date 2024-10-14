const filesystem = require('fs');
const path = require('path');

const crearTxt = () => {
    const dir = './archivos';
    
    // Verificar si el directorio 'archivos' existe
    if (!filesystem.existsSync(dir)) {
        // Si no existe, crearlo
        filesystem.mkdirSync(dir, { recursive: true });
        console.log(`Directorio creado: ${dir}`);
    }

    // Crear el archivo dentro del directorio 'archivos'
    const filePath = path.join(dir, 'archivo.txt');
    filesystem.writeFileSync(filePath, 'Hola mundo desde node.js', 'utf-8');
    console.log(`Archivo creado exitosamente en: ${filePath}`);
}
const leerTxt = () => {
    const data = filesystem.readFileSync('./archivos/archivo.txt', 'utf-8')
    console.log('El contenido de archivo.txt es: ' + data )
}



//  Modulo nativo del sistema de archivos de node.js 
// const filesystem = require('fs')


// const crearTxt = () => {
//     Crear un archivo de manera sincronica 
     
//     writeFileSync:
//         -direccion o path con el nombre de archivo y extension
//         -info o data a escribir
//         -encoding o codificacion de caracteres
    
//     filesystem.writeFileSync('./archivos/archivo.txt', 'Hola mundo desde node.js', 'utf-8')
// }
// module.exports = {
//     crearTxt: crearTxt
// }
const crearJSON = (direccion_y_nombre, contenido) => {
    filesystem.writeFileSync('./archivos/json/' + direccion_y_nombre + '.json', JSON.stringify(contenido), 'utf-8')
    console.log(`Archivo: ./archivos/json/${direccion_y_nombre}.json ha sido creado con exito! 🚀😎`)
}

const leerJSON = (direccion_y_nombre) => {
    const data = filesystem.readFileSync('./archivos/json/' + direccion_y_nombre + '.json', 'utf-8')
   return JSON.parse(data)
}
module.exports = {
    crearTxt: crearTxt,
    leerTxt,
    crearJSON,
    leerJSON
};