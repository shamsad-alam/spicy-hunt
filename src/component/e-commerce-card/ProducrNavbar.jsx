import React from 'react'
import { Link } from 'react-router'

function ProducrNavbar({cart, wishlist, handleRemoveFromCart}) {
    return (
        <>
            <header>
                <div className='bg-orange-500 py-5 shadow-md'>
                    <div className='max-w-[1400px] mx-auto px-4 '>
                        <div className='flex justify-between'>
                            <h1 className='text-4xl font-bold text-white text-center'>E-Commerce Store</h1>
                            <ul className='flex gap-5 items-center text-[22px] font-semibold text-white'>
                                <Link to='/'>Home</Link>
                                <li> About Us</li>
                                <li>Menu</li>
                                <li>Contact</li>
                            </ul>
                            <div className='flex gap-3 flex-row items-center'>
                                <Link to="/wishlist" className='px-5 py-3 rounded-full bg-gray-200 text  hover:bg-orange-300 hover:text-white transition-all duration-300 cursor-pointer font-semibold '>Wishlist</Link>
                                <Link to="/cart" className='px-5 py-3 rounded-full bg-gray-200 text  hover:bg-orange-300 hover:text-white transition-all duration-300 cursor-pointer font-semibold '>Cart</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ProducrNavbar
