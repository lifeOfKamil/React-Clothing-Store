import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import ProductDescription from '../components/ProductDescription'
import Products from '../components/Products'
import SortFilter from '../components/SortFilter'
import Footer from '../components/Footer'

const Hoodies = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SortFilter />
      <ProductDescription />
      <Products />
      <Footer />
    </div>
  )
}

export default Hoodies