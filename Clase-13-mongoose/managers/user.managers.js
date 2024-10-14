import { ERRORES } from "../constanst/errors.js"
import { Usuario } from "../models/user.model.js"


/**
 * Crea un nuevo usuario en la base de datos.
 * @param {string} nombre  - nombre del usuario 
 * @param {string} email - email del usuario
 * @param {string} rol  - rol del usuario
 * @param {string} password - password del usuario
 * @param {string} telefono - telefono del usuario
 * @param {string} direccion - direccion del usuario
 * @param {string} id - id del usuario
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

 const buscarUsuarioPorId = async (id) => {
    try{
        if(!id){
            throw{detail: 'No hay id', name: 'INVALID_ARGUMENT'}
        }
        const result = await Usuario.findById(id)
        return result
    }
    catch(error){
    }
}

const actualizarUsuario = async (id, data) => {
    try{
        //findByIdAndUpdate
        //Recibe ID, objeto de cambios, objeto de opciones
        //id: id del elemento a actualizar
        //objeto de cambios: objeto con los cambios que queremos hacer en el documento
        //opciones: objeto de opciones de la actualizacion: ej :{new:true}
       const usuarioActualizado = await Usuario.findByIdAndUpdate(id, data, {new: true})
       console.log(usuarioActualizado)
    }
    catch(error){
}
}

export { crearUsuario, buscarUsuarioPorId }