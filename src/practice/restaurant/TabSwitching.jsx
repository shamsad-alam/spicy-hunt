import React, { useState } from 'react'

function TabSwitching() {
    const [activeTab, setactiveTab] = useState("all")

    const alltabs = ["all", "men", "women", "child", "electronics"]

    const allmenu = [
        ...products.men,
        ...products.women,
        ...products.child,
        ...products.electronics,
    ];

    const displayactiveTab = activeTab == "all" ? allmenu : products[activeTab];
    
    return (
        <div className='max-w-[1400px] mx-auto px-4 my-20'>
            <div className='text-center'>
                {
                    alltabs.map((tab, index) => (
                        <button key={index} onClick={() => setactiveTab(tab)}
                            className={` mr-5 text-2xl font-semibold px-10 py-3 rounded-full cursor-pointer
                        ${activeTab == tab ? 'bg-amber-300' : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                            {tab.charAt(0).toLocaleUpperCase() + tab.slice(1)}
                        </button>
                    ))
                }
            </div>
            <div className='grid grid-cols md:grid-cols-2 gap-5 mt-10'>
                {
                    displayactiveTab.map((items) => (
                        <div key={items.id} className='border border-zinc-300 p-5 rounded-2xl shadow-md text-center'>
                            <h2 className='text-2xl font-semibold'>{items.name} </h2>
                            <p className='text-[20px] text-zinc-500 '>{items.desc} </p>
                            <h4 className='text-[20px] font-semibold'> RS. {items.price} </h4>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TabSwitching


// 👇 Products ka data (object of arrays)
const products = {
    men: [
        { id: 1, name: "Men T-Shirt", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
        { id: 2, name: "Men Shoes", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
    ],
    women: [
        { id: 3, name: "Women Dress", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
        { id: 4, name: "Women Handbag", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
    ],
    child: [
        { id: 5, name: "Kids Toy", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
        { id: 6, name: "Kids T-Shirt", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
    ],
    electronics: [
        { id: 7, name: "Mobile Phone", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
        { id: 8, name: "Headphones", desc: "Tartan Checks Spread Collar Long Sleeves Slim Fit Cotton Casual Shirt", price: 664 },
    ],
};
