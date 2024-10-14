const {calcularPrecioConIva} = require('./utils/calculosVarios.js')
const {formatearPrecio} = require('./utils/formatos.js')
const {crearTxt, leerTxt, crearJSON, leerJSON} = require('./utils/sistemaArchivos.js')


// crearTxt('archivo2.txt', 'woaw esto es node js 😎🚀')
// leerTxt()

const persona ={
    nombre: 'pepe',
    edad: 90
}

crearJSON('persona-1',persona)
 let persona_1 = leerJSON('persona-1')
 console.log(persona_1)

// Importar las validaciones desde el módulo validaciones.js
const { validarEmail, validarNumero, validarNombre } = require('./utils/validaciones');

// Probar la función validarEmail
let email_recibido = 'pepe@pepe';
console.log(`¿Es válido el email "${email_recibido}"?`, validarEmail(email_recibido)); // Debería devolver false

// Probar la función validarNumero
let numero_recibido = '12345';
console.log(`¿Es válido el número "${numero_recibido}"?`, validarNumero(numero_recibido)); // Debería devolver true

// Probar la función validarNombre
let nombre_recibido = 'Juan Perez';
console.log(`¿Es válido el nombre "${nombre_recibido}"?`, validarNombre(nombre_recibido)); // Debería devolver true



// const precio_vaso = 20

// const objeto_iva = calcularPrecioConIva(precio_vaso)
// console.log(objeto_iva)
// console.log('El iva del vaso es: ' + formatearPrecio (objeto_iva.iva)) 