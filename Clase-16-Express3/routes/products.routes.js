import express from 'express'

const productRouter = express.Router()


//En esta endpoint :product_id es un parametro de busqueda
//el req.params sera {product_id: 'valor x'}
productRouter.get('/detail/:lang/:product_id', (req, res) => {
    const {resumido} = req.query
    console.log(resumido)

    if(resumido === 'true'){
        return res.json({
            message: 'funciona'
        })
    }
    const {product_id, lang} = req.params
    if(lang == 'es'){
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Detalles del producto con id ' + product_id
            }
        })
    }
    else{
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Details product ' + product_id
            }
        })
    }
})


export default productRouter

//Traer detalles el producto con id 1
//http://localhost:3000/api/product/detail/1