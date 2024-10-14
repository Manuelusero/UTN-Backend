const formatearPrecio = (precio) => {
    return '$' + precio.toFixed(2)
}

module.exports = {formatearPrecio}

/* 
Modulos:
-utils/validaciones.js
    -validarEmail
    -validarNumero
    -validarNombre
Probar las funciones en index.js
ejemplo:
let email_recibido = 'pepe@pepe'
console.log(validarEmail(email_recibido)) deberia devolver false
*/