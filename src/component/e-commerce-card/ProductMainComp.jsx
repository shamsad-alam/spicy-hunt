import React, { useState } from 'react'
import ProductList from './ProductList'
import { ProductData } from './ProductData'
import ProductCart from './ProductCart'
import ProductWishlist from './ProductWishlist'

function ProductMainComp() {
    const[cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    const handleAddToCart = (product) => {
        if (!cart.includes(product)) {
            setCart([...cart, product])
        }
    }

    const handleAddToWishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product])
        }
    }

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    return (
        <>
            <section>
                <ProductList
                    ProductData={ProductData}
                    handleAddToCart={handleAddToCart}
                    handleAddToWishlist={handleAddToWishlist}
                />
                <ProductCart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
                <ProductWishlist
                    wishlist={wishlist}
                />
            </section>
        </>
    )
}

export default ProductMainComp
