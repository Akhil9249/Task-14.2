import React, { useContext } from 'react'
import './Single.css'
// import buy from '../..public/cart-check-svgrepo-com.svg'
 import buy from'../../public/cart-check-svgrepo-com.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'

const Single = () => {

  const {searchResult,getMovie} = useContext(MovieContext)
  const param = useParams()
 const navigate = useNavigate()
  console.log(param,"===param================");
  const Result = searchResult.filter((data) => data.id == param.id);
  const [data] = Result
  console.log(Result);
  
  return (
    <div className='Single-main'>
      <div className='Single-main-top'>
        <div className='Single-main-top-left'>
          <div className='Single-main-top-left-in'>
          <img src={data.image} alt="" className="Product-image-in" />
          </div>
        </div>
        <div  className='Single-main-top-right'>
          <h2>Single Product</h2>
          <h3 className='product-price'>{`$ ${data.price}`}</h3>
          <p className='Stok-count'>4 in stock</p>
          <div className='Single-main-top-right-in'>
            <div className='Single-main-top-right-in-image'><img src={buy} alt="" className='Single-main-top-right-in-image' /></div>
          <p>Purchase this item</p>
          </div>
          <div className='Single-main-top-right-in-bottom'>
            <h4>SKU : WCTS001</h4>
            <h4>Category : {data.category}</h4>
            <h4>Tag : Series 9</h4>
          </div>
        </div>
      </div>
      <div className='Single-main-bottom'>
      <div onClick={()=>navigate("/")}><h4>back</h4></div>
      </div>
      
    </div>
  )
}

export default Single
