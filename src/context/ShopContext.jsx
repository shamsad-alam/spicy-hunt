import React, { createContext, useEffect, useState } from 'react'
import { ProductData } from '../component/e-commerce-card/ProductData'

export const ShopContext = createContext()

function ShopProvider({ children }) {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setProducts(ProductData)
    }, [])

    const addToCart = (product) => {
        if (!cart.includes(product)) {
            setCart([...cart, product])
        }
    }

    const addToWishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product])
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id))
    }

    return (
        <div>
            <ShopContext.Provider value={{
                products,
                cart,
                wishlist,
                addToCart,
                addToWishlist,
                removeFromCart,
                removeFromWishlist
            }}>
                {children}
            </ShopContext.Provider>
        </div>
    )
}

export default ShopProvider
