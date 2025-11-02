import React from 'react'
import NavbarComp from './component/NavbarComp'
import AboutComp from './component/AboutComp'
import TopCategories from './practice/cards/TopCategories'
import CourseCards from './practice/cards/CourseCards'
import ChouseUs from './practice/cards/ChouseUs'
import RestaurantAbout from './practice/restaurant/RestaurantAbout'
import RestaurantMenu from './practice/restaurant/RestaurantMenu'
import TabSwitching from './practice/restaurant/TabSwitching'
import TabSwitching22 from './practice/restaurant/TabSwitching22'
import ProductMainComp from './component/e-commerce-card/ProductMainComp'
import ShopProvider from './context/ShopContext'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
import Wishlist from './component/Wishlist'

function App() {
  return (
    <div>
      {/* main page here ======================================= */}
      <ShopProvider>
        <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
      {/* <AboutComp /> */}


      {/* Product List START HERE ==============================*/}
      {/* <ProductMainComp /> */}
      {/* Product List END HERE ================================= */}


      {/* practice sention all START HERE ======================== */}
      <TopCategories />
      <CourseCards />
      <ChouseUs />

      {/* restaurant cards sections ============ */}
      <RestaurantAbout />
      <RestaurantMenu />
      <TabSwitching />
      <TabSwitching22 />
      {/* practice sention all END HERE ======================== */}

    </div>
  )
}

export default App
