import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router';

function Cart() {
    const { cart, removeFromCart, } = useContext(ShopContext);
    return (
        <>
            <section className='max-w-[1400px] mx-auto px-4 my-20'>
                <div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-10">Cart component</h2>
                        {cart.length === 0 ? (
                            <div className='text-center'>
                                <p className='text-2xl font-semibold mb-10 text-zinc-500'>There is nothing in your bag! Let`s add some items.</p>
                                <Link to={`/`} className='border border-orange-500 rounded-md px-10 py-4 cursor-pointer hover:bg-orange-200 '>Go Shopping</Link>
                            </div>

                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="border-b py-2 flex justify-between items-center">
                                    <div>
                                        <img className='w-20' src={item.image} alt="" />
                                        <p className='font-semibold my-1 text-[18px] '>{item.name}</p>
                                        <p className="text-gray-500">₹{item.price}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="cursor-pointer text-red-500">Remove</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Cart
