import React from 'react'

function ChouseUs() {
    return (
        <>
            <section className='max-w-[1400px] mx-auto px-4 my-20 '>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className=' relative flex-1 grid grid-cols-2 gap-4'>
                        <img className='rounded-2xl shadow-sm' src="https://preview.wpelemento.com/yoga-center/wp-content/uploads/sites/93/2025/04/about-img1.png" alt="" />
                        <div className='bg-gray-100 rounded-xl w-fit h-fit  md:p-10 p-4 text-center'>
                            <h2 className='text-7xl font-bold'>50+</h2>
                            <h4 className='text-2xl mt-2'>Programs</h4>
                        </div>
                        <div className='bg-green-300 rounded-xl md:w-70 h-fit  md:p-10 p-4 text-center'>
                            <h2 className='text-7xl font-bold'>12+</h2>
                            <h4 className='text-2xl mt-2'>Locations</h4>
                        </div>
                        <img className='rounded-2xl shadow-md md:absolute bottom-10 right-10' src="https://preview.wpelemento.com/yoga-center/wp-content/uploads/sites/93/2025/04/about-img2.png" alt="" />
                    </div>
                    <div className='flex-1 capitalize'>
                        <div>
                            <h4 className='text-green-500 text-[20px] font-semibold mb-3 '>Why Choose Us</h4>
                            <h2 className='text-4xl font-bold '>Daily Yoga Practice Keeps You Healthy And Happy</h2>
                        </div>
                        <p className='text-zinc-500 text-[18px] mb-10 mt-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='grid grid-col md:grid-cols-2 gap-3'>
                            <div className='bg-gray-200 rounded-xl text-center md:p-10 p-3'>
                                <h3 className='text-xl font-semibold mb-3'>Instructors</h3>
                                <p className='text-zinc-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='bg-gray-200 rounded-xl text-center md:p-10 p-3'>
                                <h3 className='text-xl font-semibold mb-3'>Instructors</h3>
                                <p className='text-zinc-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='bg-gray-200 rounded-xl text-center md:p-10 p-3'>
                                <h3 className='text-xl font-semibold mb-3'>Instructors</h3>
                                <p className='text-zinc-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='bg-gray-200 rounded-xl text-center md:p-10 p-3'>
                                <h3 className='text-xl font-semibold mb-3'>Instructors</h3>
                                <p className='text-zinc-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ChouseUs
