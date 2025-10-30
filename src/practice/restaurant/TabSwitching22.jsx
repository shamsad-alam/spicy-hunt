import React, { useState } from 'react'

function TabSwitching22() {
    const [activeTab, setactiveTab] = useState("All")

    const allTab = ["All", "Men", "Women", "Child", "Electronics"]

    const displayProduct = activeTab == "All" ? productData : productData.filter((data) => data.category == activeTab)

    return (
        <div className='max-w-[1400px] mx-auto px-4 my-20'>

            <div className='flex items-center justify-center gap-5'>
                {
                    allTab.map((tab, index) => (
                        <button key={index} onClick={() => setactiveTab(tab)}
                            className={`text-2xl font-semibold px-10 py-3 cursor-pointer
                            ${activeTab == tab ? 'bg-amber-500 text-white' : 'bg-zinc-200 hover:bg-zinc-300'}`} >
                            {tab}
                        </button>
                    ))
                }
            </div>

            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    displayProduct.map((items) => (
                        <div key={items.id} className='border border-zinc-300 p-5 rounded-2xl shadow-md text-center'>
                            <h2 className='text-2xl font-semibold'>{items.name} </h2>
                            <h2 className='text-xl text-orange-500 font-semibold'>{items.brand} </h2>
                            <p className='text-[20px] text-zinc-500 '>{items.desc} </p>
                            <h4 className='text-[20px] font-semibold'> RS. {items.price} </h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TabSwitching22


const productData = [
    {
        id: 101,
        name: "Men's T-Shirt",
        price: 499,
        category: "Men",
        brand: "Levi's",
        image: "/images/men-tshirt.jpg",
        rating: 4.5,
        inStock: true,
    },
    {
        id: 102,
        name: "Women's Handbag",
        price: 1299,
        category: "Women",
        brand: "Zara",
        image: "/images/women-bag.jpg",
        rating: 4.7,
        inStock: true,
    },
    {
        id: 103,
        name: "Child T-shirt",
        price: 1599,
        category: "Child",
        brand: "Spiderman",
        image: "/images/phone.jpg",
        rating: 4.4,
        inStock: true,
    },
    {
        id: 103,
        name: "Smartphone",
        price: 15999,
        category: "Electronics",
        brand: "Samsung",
        image: "/images/phone.jpg",
        rating: 4.4,
        inStock: false,
    },
];