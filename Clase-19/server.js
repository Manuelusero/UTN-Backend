//Motores de plantilla o templates engine
//Tambien aprendemos a configurar archivos estaticos
//HANDLEBARS

import express from 'express'
import {engine} from 'express-handlebars'

const app = express()

const PORT = 3000

//Indicar a nuesto server que pueda enviar los archivos estaticos dentro de la carpeta /public
app.use(express.static('./public'))


//Middleware que nos transforma las consultas enviadas con url-encoded a objeto (BODY)
app.use(express.urlencoded({extended: true}))

//Indicamos que a los archivos con extension handlebars deberemos tratarlos usando la libreria handlebars
app.engine('handlebars', engine())

//Cuando el servidor quiera renderizar respuestas, lo hara usando a handlebars
app.set('view engine', 'handlebars')
app.set('views', './views');

const productos = [
    {
        id: 1,
        nombre: 'Tv samsung',
        precio: 100,
        descripcion: 'La mejor tv',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Tv LG',
        precio: 150,
        descripcion: 'La mejor tv',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Tv Noblex',
        precio: 200,
        descripcion: 'La mejor tv',
        stock: 54
    }
]

app.get('/', (req, res) => {
    try{
        

        /* throw new Error('No hay productos ahora') */
        
        const response = {
            status: 200,
            message: "Productos obtenidos",
            ok: true,
            data: {
                titulo: 'Titulo X', 
                fecha_hoy: '3/10/2024', 
                valor_dolar: 1200,
                productos
            },
            layout: 'products' //El nombre del layout que queremos mostrar
        }
        res.render('home', response)
    }
    catch(error){
        const response = {
            status: 500,
            message: "Internal server error",
            ok: false,
            data: {
                detail: error.message
            }
        }
        res.render('home', response)
    }
   
})

app.get('/products/new', (req, res) => {
    res.render('product-form',{
        data: {
            errors: {
                nombre: null,
                stock: null,
                precio: null,
                descripcion: null
                
            }
        }
    })
})

app.post('/products/new', (req, res) => {
   const {nombre,precio,sotck,descripcion} = req.body
    console.log('Recibido');y

    const errores = {
        nombre: null,
        stock: null,
        precio: null,
        descripcion: null
    };

    // Validaciones
    if (!req.body.nombre.trim() || !isNaN(req.body.nombre)) {
        errores.nombre = 'El nombre no puede ser un valor numérico o vacío';
    }
    if (!req.body.precio.trim() || isNaN(req.body.precio.trim())) {
        errores.precio = 'El precio debe ser un número';
    }
    if (!req.body.stock.trim() || isNaN(req.body.stock.trim())) {
        errores.stock = 'El stock debe ser un número';
    }

    // Verificar si hay errores
    let hayError = Object.values(errores).some(error => error !== null);

    if (hayError) {
        // Si hay errores, renderizar el formulario con los mensajes de error
        return res.render('product-form', {
            data: {
                errors: errores,
                form_state: {
                    product: newProduct
                }
            }
        });
    }
    productos.push({...newProduct, id: productos.length + 1});
    // Si no hay errores, redirigir a la página principal o detalle del producto
    res.redirect('/');
})


app.get('/products/:product_id', (req, res) => {
    const {product_id} = req.params
    //Aqui pueden validar el product_id
    const producto_buscado = productos.find(producto => producto.id === Number(product_id ))
    const response = {
        ok: true,
        message: 'Producto obtenido',
        status: 200,
        data: {
            product:{
                ...producto_buscado,
                esCaro: producto_buscado.precio > 100
            } 
        }
    }
    res.render('product-detail', response)

   
});

app.get('/products/product_id/update', (req, res) => {
    const {product_id} = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id ))
    res.render('product-form-update', {
        data:{
            errors: {
                nombre: null,
                stock: null,
                precio: null,
                descripcion: null
            },
            form_state: {
                product: {
                    id: producto_buscado.id,
                    nombre: producto_buscado.nombre,
                    stock:producto_buscado.stock, 
                    precio:producto_buscado.precio, 
                    descripcion: producto_buscado.descripcion
                 }
               
                }
            }
        })
    })

    app.post('/products/product_id/update', (req, res) => {
        /*Logica de formulario de actualizacion*/
    })
app.listen(PORT, ()=> {
    console.log(
        `La aplicacion se esta ejecutando en http://localhost:${PORT}`
    )
})