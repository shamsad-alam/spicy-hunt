import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router'

function NavbarComp() {
    const { cart, wishlist } = useContext(ShopContext)
    return (
        <>
            <header>
                <div>
                    <nav className='max-w-[1400px] mx-auto px-4 py-5 flex justify-between items-center'>
                        <div>
                            <Link to={`/`}>
                                <h2 className='md:text-3xl text-[25px] font-bold text-orange-500'>SpicyHunt</h2>
                            </Link>
                        </div>
                        <div>
                            <ul className='md:flex gap-8 text-lg font-medium hidden'>
                                <Link to={`/`} className='hover:text-orange-500 transition-all duration-300 cursor-pointer'>Home</Link>
                                <Link to={`/`} className='hover:text-orange-500 transition-all duration-300 cursor-pointer'>Products</Link>
                                <li className='hover:text-orange-500 transition-all duration-300 cursor-pointer'>About</li>
                                <li className='hover:text-orange-500 transition-all duration-300 cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                        <div className='flex md:gap-5 gap-3'>
                            <Link to={`/cart`} className='md:px-8 px-3 md:py-2 py-1 rounded-full bg-orange-500 text-white font-semibold hover:bg-gray-200 hover:text-black transition-all duration-300 cursor-pointer '>
                                {`Cart ${cart.length}`}
                            </Link>
                            <Link to='/wishlist' className='md:px-8 px-3 md:py-2 py-1 rounded-full bg-gray-200 text font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer '>
                                {`Wishlist ${wishlist.length}`}
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavbarComp
