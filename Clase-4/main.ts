
/* 
const arrayEspecial : [string, number] = ['pepe', 15]


const mostrarEdad = (persona : [string, number]) : void => {
    console.log(persona[1])
}
 */

/* Tema pendiente de typescript */

/* 
-datos primitivos
-funciones
-objetos literales
-objetos con iterfaz
-arrays?
-metodos avanzados de array?
*/

/* const nombres : string[] = ['pepe', 'juan', 'maria']

const notas : number[] = [10, 7, 2]

interface Producto {
    nombre: string, 
    id: number, 
    precio: number,
    descripcion: string,
    title: string
}

const producto_1 : Producto = {
    nombre: 'tv samsung',
    id: 1,
    precio: 1,
    descripcion: 'lorem',
    title: ''
}

producto_1.title = 'juan'

const venderProducto = (producto: Producto) : void => {
    console.log('Has comprado el producto ' + producto.title )
}
 */

/* 
const lista_productos : Producto[] = [
    producto_1, 
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 30,
        descripcion: 'lorem',
        title: 'La mejor'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 50,
        descripcion: 'lorem',
        title: 'Si'
    }
] */
/* 
forEach => void

map => array

filter => array con el tipo de array original
Productos[] =>  filter() => Productos[]

find => elemento del array | undefined
Productos[] => find() => Producto | undefined
Item[] => find() => Item | undefined

findIndex => number 
 */

/* const tvNoblex : Producto | undefined = lista_productos.find(
        (producto : Producto) : boolean  => {
            return producto.id === 2
        }
    )
console.log(tvNoblex) */


/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/






/* Aqui veremos POO en typescript */


/* class Personaje {
    nombre : string 

    constructor(nombre: string){
        this.nombre = nombre
    }
    comer(comida : string) : string{
        return this.nombre + ' esta comiendo ' + comida
    }
}


const personaje_principal : Personaje = new Personaje('pepe')
let mensaje : string = personaje_principal.comer('pollo frito')
document.write(mensaje) */

let id_counter = 0
class Producto{
    nombre : string
    precio : number
    constructor(nombre : string, precio : number){
        this.nombre = nombre
        this.precio = precio
    }
}

class ManejadorProductos {
    productos : Producto[]
    id : number

    constructor(){
        this.productos = []
        this.id = id_counter++
    }
    agregarProducto (producto : Producto) : Producto[]{
        this.productos.push(producto)
        return this.productos
    }
}

const manejadorProducto : ManejadorProductos = new ManejadorProductos()

const producto_1 : Producto = new Producto('tv', 700)


//Es una mala practica
/* manejadorProducto.productos.push(producto_1)
 */
//Esto es una buena practica
manejadorProducto.agregarProducto(producto_1)

console.log(manejadorProducto)