import {mongoose} from "./config/mongoDB.config.js";
import { buscarUsuarioPorId } from "./managers/user.managers.js";


//En vez de hacer esto 
/* console.log(await buscarUsuarioPorId('66e97b026aa53285a15f607d')) */

//Es mejor hacer esto:
//Then se ejecuta cuando la promesa se cumpla (osea la funcion retorna un valor)
//Catch se ejecuta cuando la promesa no se cumpla (osea la funcion no retorna un valor)

buscarUsuarioPorId('66e97b026aa53285a15f607d')
.then(
    (retorno) => {
        console.log(retorno)
    }
)
.catch(
    (error) => {
        console.log('Ocurrio una excepcion', error)
    }
)
.finally(() => {
   console.log('proceso terminado')
})

