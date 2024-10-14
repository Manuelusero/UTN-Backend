var nombre : string | null = 'pepe'
nombre = null

/* Soy una variable de JS ni mas ni menos  */

let datoRandom : any = 'hola'

console.log('hola' + nombre)

/* sumar (a, b) devuelve a + b */

function sumar (a : number, b : number) : number {
    return a + b
}

sumar (1, 2)

/* Cuando hay un ? al final de un parametro significa que ese valos es OPCIONAL */

// const saludar = (edad : number = 10, nombre?: string) => {
//     console.log('mi edad es ' + edad)
//     if (nombre) {
//         return 'hola ' + nombre
//     } else {
//         return 'Hola, no se tu nombre'
//     }
// }

// console.log(saludar())

interface Persona {
    nombre: string
    apellido: string
    edad: number
}

const persona : Persona = {
    nombre: 'pepe',
    apellido: 'perez',
    edad: 10
}

const persona_2 : Persona = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 10
}

const saludarAPersona = (persona : Persona) : void => {
    alert('hola ' + persona.nombre)
}

saludarAPersona(persona_2)

/*
calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestoIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}
*/

function calcularIva(numero: number) {
    return numero * 0.21;
}

function obtenerImpuestoIva(numero : number): { iva: number, total: number, base: number } {
    
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