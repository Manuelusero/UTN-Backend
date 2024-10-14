"use strict";
var nombre = 'pepe';
nombre = null;
/* Soy una variable de JS ni mas ni menos  */
let datoRandom = 'hola';
console.log('hola' + nombre);
/* sumar (a, b) devuelve a + b */
function sumar(a, b) {
    return a + b;
}
sumar(1, 2);
const persona = {
    nombre: 'pepe',
    apellido: 'perez',
    edad: 10
};
const persona_2 = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 10
};
const saludarAPersona = (persona) => {
    alert('hola ' + persona.nombre);
};
saludarAPersona(persona_2);
/*
calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestoIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}
*/
function calcularIva(numero) {
    return numero * 0.21;
}
function obtenerImpuestoIva(numero) {
    const iva = calcularIva(numero);
    const total = numero + iva;
    return {
        iva: iva,
        total: total,
        base: numero
    };
}
const numero = 100;
const resultado = obtenerImpuestoIva(numero);
console.log(resultado);
