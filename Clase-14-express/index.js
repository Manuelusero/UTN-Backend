//EXPRESS
//Nos permite crear APIS

import express from 'express'
import filesystem from 'fs'

//Aqui guardamremos a nuestra api
const app = express()

//Middleware que nos habilita a recibir consultas con url enconded
app.use(express.urlencoded ({ extended: true }))

app.get('/', (request, response) => {
    response.send('hola')
})

app.get('/fecha', (request, response) => {
    response.send(new Date().toString())
})

app.post('/usuario', (request, response) => {
    //Request es el objeto donde se guardan los datos de consulta
    //request.body es la carga util recibida (los datos recibidos)

    console.log(request.body)
    const usuarios = JSON.parse(filesystem.readFileSync('./usuarios.json', 'utf-8'))
    usuarios.push({nombre: request.body.nombre, email: request.body.email})
    filesystem.writeFileSync('./usuarios.json', JSON.stringify(usuarios), 'utf-8')
    response.send('Usuario registrado')
})

app.listen(3000,() => {
    console.log('Aplicacion escuchandose en http://localhost:3000')
})


/* 
POST usuario
Deben usar filesystem y asincronia
vamos a verificar que valores hay en ./usuarios.json
Si la resupuesta en null: 
crearemos un array ya agregaremos el usuario recibido. 
Si la resupuesta es distinta de null o undefined:
Vamos a transfromar la respuesta a objeto de JS y agregregaremos al usuario recibido
Finalmente lo guardaremos en el archivo usuarios.json
*/


app.post('/usuario', async (request, response) => {
    const usuario = {
        nombre: request.body.nombre,
        email: request.body.email
    }
    let usuarios
    const resultado = await filesystem.promises.readFile('./usuarios.json', 'utf-8')

    if(!resultado){
        usuarios = []
        usuarios.push(usuario)
    }
    else{
        //En caso de que haya usuarios
        usuarios= JSON.parse(resultado)
    }
    usuarios.push(usuario)
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios), 'utf-8')
    response.send('Usuario registrado')
})

app.listen(3000,() => {
    console.log('Aplicacion escuchandose en http://localhost:3000')
})

