import React from 'react'

function ProductCart({ cart, handleRemoveFromCart }) {
    return (
        <>
            <section>
                <div className='max-w-[1400px] mx-auto px-4 my-20'>
                    <div>
                        <h2 className='text-4xl font-bold text-center mb-10'>Shopping Cart</h2>
                        {cart.length === 0 ? (
                            <p className='text-center text-xl'>Your cart is empty.</p>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {cart.map((product) => (
                                    <div key={product.id} className='border border-zinc-100 shadow-md rounded-2xl p-5'>
                                        <img className='rounded-t-2xl' src={product.image} alt={product.name} />
                                        <div className='px-8 py-3'>
                                            <h3 className='text-[25px] font-semibold'>{product.name}</h3>
                                            <p className='my-3 text-orange-500 text-[20px] font-semibold '>Rs.{product.price}</p>
                                            <button onClick={() => handleRemoveFromCart(product)} className='px-5 py-3 rounded-full bg-red-500 text-white hover:bg-gray-200 hover:text-black transition-all duration-300 cursor-pointer font-semibold '>Remove from Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCart
