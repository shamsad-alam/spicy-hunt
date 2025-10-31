import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

function Card({ product }) {
    const { addToCart, addToWishlist, } = useContext(ShopContext);
    return (
        <>
            <section>
                <div className='border border-zinc-100 shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer'>
                    <div>
                        <img className='rounded-t-2xl' src={product.image} alt={product.name} />
                        <div className='md:px-8 px-5 py-3'>
                            <h3 className='text-[25px] font-semibold'>{product.name}</h3>
                            <div className='flex gap-3 justify-between'>
                                <p className='my-3 text-orange-500 text-[20px] font-semibold '>Rs.{product.price}</p>
                                <p className='my-3 text-orange-500 text-[20px] font-semibold '>Rating: {product.rating}</p>
                            </div>
                            <p className='text-zinc-500 text-[20px] my-5 '>{product.description} </p>
                            <div className='flex flex-col md:flex-row gap-3 mb-3'>
                                <button onClick={() => addToCart(product)} className='px-5 py-3 rounded-full bg-orange-500 text hover:bg-gray-200 hover:text-black transition-all duration-300 cursor-pointer text-white  font-semibold '>Add to Cart</button>
                                <button onClick={() => addToWishlist(product)} className='px-5 py-3 rounded-full bg-gray-200 text  hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer font-semibold '>Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
