import React, { useContext } from 'react'
import Card from './Card'
import { ShopContext } from '../context/ShopContext'


function ProductList() {
    const {products} = useContext(ShopContext);
    return (
        <>
            <section>
                <div className='max-w-[1400px] mx-auto px-4 my-20'>
                    <div>
                        <h2 className='text-4xl font-bold text-center mb-10'>Product List</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {products.map((product) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ProductList
