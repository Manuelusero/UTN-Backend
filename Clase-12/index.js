import { mongoose } from "./config/mongoDB.config.js";

/*
MONGO DB NO TIENE SCHEMAS
Mongoose trae schemas
 */

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        rol: {type: String, required: true},
        password: {type: String, required: true},
        telefono: {type: String, required: true},
        direccion: {type: String, required: true},
        fecha_registro: {type: Date, default: Date.now}
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)


/**
 * Crea un nuevo usuario en la base de datos.
 * @param {string} nombre  - nombre del usuario 
 * @param {string} email - email del usuario
 * @param {string} rol  - rol del usuario
 * @param {string} password - password del usuario
 * @param {string} telefono - telefono del usuario
 * @param {string} direccion - direccion del usuario
 * @returns {object} El usuario creado
 * @throws {Error} Si el usuario ya existe, o si hay un error al crear el usuario.
 */


const crearUsuario = async (nombre, email, rol, password, telefono, direccion) => {
    try{
        const usuario = new Usuario({
            nombre,
            email,
            rol,
            password,
            telefono,
            direccion
        })
        const resulatdo = await usuario.save()
        return resulatdo
    }
    catch(error){
        const customError = ERRORES[error.code]
        console.log(customError)
        console.log(error)
    }
}
crearUsuario('juan', 'juanjo@gmail.com', 'user', 'juansito345', '123456', 'blabla')
