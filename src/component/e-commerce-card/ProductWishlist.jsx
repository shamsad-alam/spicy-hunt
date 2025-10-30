import React from 'react'

function ProductWishlist({ wishlist }) {
    return (
        <>
            <section>
                <div className='max-w-[1400px] mx-auto px-4 my-20'>
                    <div>
                        <h2 className='text-4xl font-bold text-center mb-10'>Wishlist</h2>
                        {wishlist.length === 0 ? (
                            <p className='text-center text-xl'>Your wishlist is empty.</p>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {wishlist.map((product) => (
                                    <div key={product.id} className='border border-zinc-100 shadow-md rounded-2xl p-5'>
                                        <img className='rounded-t-2xl' src={product.image} alt={product.name} />
                                        <div className='px-8 py-3'>
                                            <h3 className='text-[25px] font-semibold'>{product.name}</h3>
                                            <p className='my-3 text-orange-500 text-[20px] font-semibold '>Rs.{product.price}</p>
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

export default ProductWishlist
