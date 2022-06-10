import React from 'react'
import product from '../sanity_studio/schemas/product';

const Home = () => {
  return (
    <>
      HeroBanner
        <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Your one stop shop for Earrings</p>
        </div>
        <div className='products-container'>
          {["Product 1","Product 2",].map((product)=> product  )}
        </div>
        Footer
    </>
  )
}
export default Home;