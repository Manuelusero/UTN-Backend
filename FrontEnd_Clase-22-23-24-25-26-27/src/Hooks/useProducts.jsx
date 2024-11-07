import { useState, useEffect } from 'react'
import { GET, authenticatedHeaders } from '../fetching/http.fetching'

const useProducts = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await GET('http://localhost:3000/api/products', {
            headers: authenticatedHeaders
        })

        console.log({ response })
        if (response.ok) {
            setProducts(
                response.payload.products)
            setIsLoadingProdcuts(false)
        }

    }
    useEffect(
        () => {
            getProducts()
        },
        []
    )
    return { products, setIsLoadingProdcuts }
}

export default useProducts