import React from 'react'
import { Link } from 'react-router-dom'
import useProducts from '../../Hooks/useProducts'

const HomeScreen = () => {
    const user_info = JSON.parse(sessionStorage.getItem('user_info'))
    const { products, isLoadingProdcuts } = useProducts()

    return (
        <div>
            <h1>Bienvenido {user_info.name}</h1>
            <Link to={'/product/new'}>Crear producto</Link>
            {
                isLoadingProdcuts
                    ? <span>Cargando...</span>
                    : <ProductList products={products} />
            }
        </div>
    )
}
const ProductList = ({ products }) => {
    return (
        products.map(product => {
            return <Product
                key={product.id}
                {...product}
            />
        })
    )
}
const Product = ({ id, title, price, image, description, stock }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} width={'200'} />
            <span>Precio: ${price}</span>
            <Link>Ir a detalle</Link>
        </div>
    )
}




export default HomeScreen