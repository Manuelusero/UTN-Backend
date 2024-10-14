/* Aqui veremos POO en JS */




let id_counter = 1
/* const crearProducto = (nombre, precio, descripcion) => {
    return {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        id: id_counter++
    }
} */

//ESTA ES LA FORMA DE TRABAJAR POO EN ES5

/* function Producto (nombre, precio, descripcion){
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.id = id_counter++
}

Producto.prototype.saludar = function(){ 
    console.log('hola')
}

 */
/* Cada vez que instancie el obj producto se va a crear y guardar la funcion saludar */
/* 
-las propiedades se crean en cada instancia del objeto
-los metodos se crean una sola vez (como las funciones)
*/


/* const producto_x = new Producto('pc', 100, 'lorem' )
const producto_b = new Producto('pc', 100, 'lorem' )
const producto_c = new Producto('pc', 100, 'lorem' )
console.log(producto_x)

producto_x.saludar */

/* const producto_1 = crearProducto('pc dell', 300, 'lorem')

const producto_2 = crearProducto('Pc samsung', 600, 'lorem')

const producto_3 = crearProducto('pc escritorio', 1400, 'lorem')

console.log(producto_1, producto_2, producto_3) */

/* 
-constructor es una funcion que se invocara al instanciarse la clase
-las clases devuelven objetos
-las clases retornan siempre a this, que es un objeto
-podemos modificar a this como si fuera un objeto (es un objeto xD)
*/
/* class Personaje{
    constructor(nombre){

        //Crear la propiedad en objeto llamada 'propiedad_x' con valor random
        this.propiedad_x = 'random'
        this.nombre = nombre
    }

    comer (comida) {
        return this.nombre + " esta comiendo " + comida
    }
}

//Instanciando la clase personaje
const personaje = new Personaje('pepe')
const personaje_2 = new Personaje('juan')

document.write(personaje.comer('pollo con fritas'))
console.log(personaje.comer('empanadas fritas'))
 */

