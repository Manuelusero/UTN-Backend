/* Crear una funcion que reciba un precio y retorne un onbjeto  con 
recibe 100
{
    iva: 21,
    precio_original: 100,
    precio_con_iva: 121
} */

const calcularPrecioConIva = (precio) => {
    const iva = precio * 0.21 
    const precio_final = precio + iva
    return {
         iva,
         precio,
         precio_final
    }
}

module.exports = { 
    nombre: 'pepe', 
    calcularPrecioConIva: calcularPrecioConIva }