import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL,)
    .then(
        () => {
            console.log('conexion exitosa con la DB')
         } 
        )

        .catch(
            (error) => {
                console.log('Error de conexion')
            }
        )

        export default mongoose