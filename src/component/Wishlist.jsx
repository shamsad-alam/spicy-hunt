import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router';

function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(ShopContext)

    return (
        <section className='max-w-[1400px] mx-auto px-4 my-20'>
            <div >
                <h2 className="text-xl font-bold mb-10 text-center">Your Wishlist</h2>
                {wishlist.length === 0 ? (
                    <div className='text-center'>
                        <p className='text-2xl font-semibold mb-10 text-zinc-500'>YOUR WISHLIST IS EMPTY</p>
                        <Link to={`/`} className='border border-orange-500 rounded-md px-10 py-4 cursor-pointer hover:bg-orange-200 '>Continue Shopping</Link>
                    </div>
                ) : (
                    wishlist.map((item) => (
                        <div key={item.id} className="border-b py-2 flex justify-between items-center">
                            <div>
                                <img className='w-20' src={item.image} alt="" />
                                <p className='font-semibold my-1 text-[18px] '>{item.name}</p>
                                <p className="text-gray-500">₹{item.price}</p>
                            </div>
                            <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 cursor-pointer">Remove</button>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};
export default Wishlist
