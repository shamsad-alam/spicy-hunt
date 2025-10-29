import React from 'react'

function NavbarComp() {
    return (
        <>
            <section className=''>
                <div className='border-b border-zinc-100'>
                    <header className='w-[1400px] mx-auto md:px-20 px-10 py-6   flex flex-col md:flex-row items-center  justify-between'>
                        <div>
                            <h2 className='text-2xl font-bold'><span className='text-yellow-400'>S</span>picy <span className='text-yellow-400'>C</span>hicken</h2>
                        </div>
                        <nav>
                            <ul className='flex gap-5 text-[18px] font-semibold'>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Menu</li>
                                <li>Contact us</li>
                            </ul>
                        </nav>
                        <button className='bg-yellow-400 px-10 py-3 rounded-full font-bold'>Book a Table</button>
                    </header>
                </div>
                <div className='relativetop-0 -z-1 '>
                    <div>
                        <img className='w-screen h-svh object-cover object-top' src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" />
                    </div>
                    <div className=' w-[50%] flex-1 absolute top-1/2 left-35'>
                        <h3 className='text-6xl/18 uppercase font-bold text-white'>Dining redeffiened with every bite.</h3>
                        <p className='text-xl text-zinc-300 pt-3 pb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. pit saepe dolorueligendi, enim inventore totam odit voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsum?</p>
                        <button className='bg-yellow-400 px-10 py-3 rounded-full font-bold'>Book a Table</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default NavbarComp
