import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'UTN_INTRO_BACKEND'
const DB_CONNECTION_STRING = `${DB_URL}/${DB_NAME}`

mongoose.connect(DB_CONNECTION_STRING)

const database = mongoose.connection

database.once('open', () => {
    console.log('Conexion exitosa con MongoDB')
})

database.on('error', () => {
    console.log('ERROR MONGO DB')
})

/*Estamos exportando a mogoose que ya esta conectado y a database para poder interactual con la DB */

export {mongoose ,database}