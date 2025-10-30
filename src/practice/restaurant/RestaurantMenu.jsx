import React, { useState } from 'react'

function RestaurantMenu() {
    const [activeTab, setactiveTab] = useState("Starters")

    const allTab = ["Starters", "Main Course", "Desserts", "Beverages"]

    const displayMenu = menuData.find(menu => menu.section === activeTab)?.items || []


    return (
        <>
            <section className='max-w-[1400px] mx-auto px-4 my-20'>
                <div>
                    <div className='w-full text-center'>
                        <div className='w-[50%] mx-auto  uppercase'>
                            <h4 className='text-emerald-800 md:text-[22px] text-[18px] font-bold '>from our menu</h4>
                            <h2 className='md:text-5xl/15 text-2xl font-bold md:mt-4 mt-2'>an Inspired Menu That <span className='text-emerald-800'>Blends Tradition</span></h2>
                        </div>
                        <div className='md:w-[60%] mx-auto mt-20 mb-15 '>
                            <ul className='flex flex-wrap md:gap-10 gap-x-5 justify-center text-[22px] font-semibold px-8 py-4 bg-emerald-200 rounded-full cursor-pointer '>
                                {
                                    allTab.map((tab, index) => (
                                        <li key={index} onClick={() => setactiveTab(tab)
                                        } className={`md:px-6 px-3 py-2 rounded-full
                                        ${activeTab == tab ? 'bg-emerald-800 text-white' : 'text-emerald-800 hover:bg-emerald-300'}`}>
                                            {tab}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-15 gap-y-5 '>
                    {
                        displayMenu.map((item, index) => (
                            <div key={index} className='flex gap-3 items-center '>
                                <div className='flex-1 '>
                                    <img className='w-40 ' src="https://html.awaikenthemes.com/spicyhunt/images/our-menu-image-1.png" alt="" />
                                </div>
                                <div className='flex-2 p-3'>
                                    <div className='flex justify-between items-center mb-3'>
                                        <h3 className='text-emerald-800 md:text-[22px] text-[19px]  font-bold uppercase'>{item.title} </h3>
                                        <button className='text-[20px] bg-emerald-200 rounded-full font-semibold px-6 py-1 '>{item.price} </button>
                                    </div>
                                    <p className='text-zinc-500 md:text-[20px] text-[18px] '>{item.description} </p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </section>
        </>
    )
}

export default RestaurantMenu


const menuData = [
    {
        section: "Starters",
        items: [
            {
                image: "starter1.jpg",
                title: "Paneer Tikka",
                price: 180,
                description: "Grilled cottage cheese marinated in spices, served with mint chutney and onions."
            },
            {
                image: "starter2.jpg",
                title: "Chicken Wings",
                price: 220,
                description: "Crispy fried chicken wings tossed in spicy sauce, garnished with coriander leaves."
            },
            {
                image: "starter3.jpg",
                title: "Veg Spring Rolls",
                price: 150,
                description: "Crispy rolls filled with mixed vegetables, served with sweet and sour sauce."
            },
            {
                image: "starter4.jpg",
                title: "French Fries",
                price: 120,
                description: "Golden fried potatoes, served with ketchup and mayonnaise for dipping."
            },
            {
                image: "starter5.jpg",
                title: "Chicken Lollipop",
                price: 200,
                description: "Deep-fried chicken drumsticks coated in spicy batter, served with green chutney."
            },
            {
                image: "starter6.jpg",
                title: "Samosa",
                price: 80,
                description: "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney."
            }
        ]
    },
    {
        section: "Main Course",
        items: [
            {
                image: "main1.jpg",
                title: "Butter Chicken",
                price: 280,
                description: "Creamy tomato-based curry with tender chicken, served with naan or rice."
            },
            {
                image: "main2.jpg",
                title: "Paneer Butter Masala",
                price: 260,
                description: "Rich gravy with paneer cubes, onions, and tomatoes, served with naan."
            },
            {
                image: "main3.jpg",
                title: "Chicken Biryani",
                price: 240,
                description: "Fragrant rice cooked with chicken, spices, and herbs, garnished with fried onions."
            },
            {
                image: "main4.jpg",
                title: "Veg Pulao",
                price: 180,
                description: "Aromatic rice cooked with mixed vegetables and mild spices, served with raita."
            },
            {
                image: "main5.jpg",
                title: "Dal Makhani",
                price: 200,
                description: "Slow-cooked black lentils with butter and cream, served with naan or rice."
            },
            {
                image: "main6.jpg",
                title: "Chole Bhature",
                price: 160,
                description: "Spicy chickpea curry with deep-fried bread, served with pickles and onions."
            }
        ]
    },
    {
        section: "Desserts",
        items: [
            {
                image: "dessert1.jpg",
                title: "Gulab Jamun",
                price: 90,
                description: "Soft fried dough balls soaked in sugar syrup, served warm with ice cream."
            },
            {
                image: "dessert2.jpg",
                title: "Rasmalai",
                price: 100,
                description: "Cottage cheese dumplings in sweetened milk, flavored with cardamom and saffron."
            },
            {
                image: "dessert3.jpg",
                title: "Kheer",
                price: 80,
                description: "Creamy rice pudding cooked with milk, sugar, and cardamom, garnished with nuts."
            },
            {
                image: "dessert4.jpg",
                title: "Ice Cream",
                price: 70,
                description: "Vanilla ice cream served with chocolate sauce and sprinkles, chilled and creamy."
            },
            {
                image: "dessert5.jpg",
                title: "Jalebi",
                price: 60,
                description: "Crispy spiral-shaped sweets soaked in sugar syrup, served warm with rabri."
            },
            {
                image: "dessert6.jpg",
                title: "Brownie",
                price: 110,
                description: "Rich chocolate brownie served with vanilla ice cream and chocolate sauce."
            }
        ]
    },
    {
        section: "Beverages",
        items: [
            {
                image: "beverage1.jpg",
                title: "Lemonade",
                price: 60,
                description: "Refreshing lemon drink with sugar and mint, served chilled with ice cubes."
            },
            {
                image: "beverage2.jpg",
                title: "Mango Lassi",
                price: 80,
                description: "Creamy yogurt drink blended with mango pulp, sugar, and a hint of cardamom."
            },
            {
                image: "beverage3.jpg",
                title: "Masala Chai",
                price: 40,
                description: "Hot tea brewed with milk, sugar, and aromatic spices, served in a glass."
            },
            {
                image: "beverage4.jpg",
                title: "Cold Coffee",
                price: 70,
                description: "Chilled coffee blended with milk, sugar, and ice, topped with cream."
            },
            {
                image: "beverage5.jpg",
                title: "Orange Juice",
                price: 60,
                description: "Freshly squeezed orange juice, served chilled with a slice of orange."
            },
            {
                image: "beverage6.jpg",
                title: "Soft Drink",
                price: 50,
                description: "Carbonated beverage in various flavors, served chilled with ice cubes."
            }
        ]
    }
];
