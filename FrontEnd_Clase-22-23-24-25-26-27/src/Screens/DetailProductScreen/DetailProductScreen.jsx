import React from 'react'
import { useParams } from 'react-router-dom'

const DetailProductScreen = () => {
    const { product_id } = useParams()
    //Llamar al hook useProductDetail
    //const { product_detail (esto sera un estado) } = useProductDetail(product_id)
    return (
        <div>
            <h2>Detalle del producto</h2>
        </div>
    )
}

export default DetailProductScreen