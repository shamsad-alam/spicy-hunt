import React from 'react'

function RestaurantAbout() {
    return (
        <>
            <section className='max-w-[1400px] mx-auto px-4 my-10 '>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex-1 relative'>
                        <img className='rounded-full w-[80%] h-full ' src="https://html.awaikenthemes.com/spicyhunt/images/about-us-image.jpg" alt="" />
                        <div className='absolute top-40 right-0 flex flex-col rounded-xl p-5 bg-emerald-800 md:w-[200px] w-[150px] '>
                            <img className='w-[50px] ' src="https://html.awaikenthemes.com/spicyhunt/images/icon-company-experience.svg" alt="" />
                            <h3 className=' md:text-[20px] text-[16px] text-white font-bold mt-3 '>30+ years of experience</h3>
                        </div>
                        <div className='absolute md:w-[200px] md:h-[200px] md:-left-10 md:bottom-10 bottom-0'>
                            <img className='rounded-full w-full h-full border-10 object-cover border-white ' src="https://html.awaikenthemes.com/spicyhunt/images/about-us-img-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='md:flex-[10%] flex flex-col justify-center'>
                        <div>
                            <h4 className='text-[25px] font-semibold text-emerald-800 '>About us</h4>
                            <h2 className='text-4xl font-bold uppercase mt-2'>Our Commitment to Authenticity & <span className='text-emerald-800'>excellence</span></h2>
                        </div>
                        <p className='text-[22px] text-zinc-500 mt-5 mb-10'>Every dish we create is a celebration of connection, crafted with passion and inspired by diverse flavors. Join us in an inviting space where every bite sparks joy and every moment becomes a cherished memory.</p>
                        <ul className='flex flex-col gap-3 text-zinc-500 text-[22px] mt-5 '>
                            <li>seasonal & locally sourced ingredients</li>
                            <li>vegetarian & dietary-friendly options</li>
                            <li>exquisite pairings & unique flavors</li>
                        </ul>
                        <div className='flex gap-6 mt-10'>
                            <button className='bg-emerald-800 text-xl text-white md:py-4 py-2 md:px-15 px-6 font-semibold rounded-full'>
                                Order Now
                            </button>
                            <button className='bg-gray-200 text-xl text-emerald-800 md:py-4 py-2 md:px-15 px-6 font-semibold rounded-full'>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestaurantAbout
