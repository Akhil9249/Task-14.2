
import React, { useContext, useEffect, useState } from 'react'
import buyLogo from '../../public/buy-cart-online-svgrepo-com.svg'
import './Product.css'
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';





const Product = () => {

   
   const {searchResult,getMovie} = useContext(MovieContext)

  return (
    <>
    {searchResult.map((data) => (
        <Link to={`/single/product/${data.id}`} key={data.id}>
      <div className="LandPage-right-bottom-main-sub">
          <div className="Product-image">
              <img src={data.image} alt="" className="Product-image-in" />
          </div>
          <div className="Product-logo">
             <img src={buyLogo} alt="" />
          </div>
          <div className="Product-name">
              <p>{data.category}</p>
          </div>
          <div className="Product-price-tag">
              <p>{`$ ${data.price}`}</p>
          </div>
      </div>
      </Link>
  ))}
  </>
  )
}

export default Product
