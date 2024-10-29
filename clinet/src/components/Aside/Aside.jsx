import React from 'react'
// import shopping from '../../../public'
import './Aside.css'
import category from '../../../public/category-svgrepo-com.svg'
import wallet from '../../../public/wallet-2-svgrepo-com.svg'
import cart from '../../../public/cart-check-svgrepo-com.svg'
import userProfile from '../../../public/user-profile-account-person-svgrepo-com.svg'
import settings from '../../../public/settings-svgrepo-com.svg'
import logOut from '../../../public/log-out-1-svgrepo-com.svg'
import shopping from '../../../public/shopping-basket-svgrepo-com.svg'
import home from '../../../public/home-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div className="LandPage-Left">
              <div className="LandPage-Left-first"><img src={shopping} alt="" /><h2>OnShop</h2></div>
              <div className="LandPage-Left-second">
                <div className="LandPage-Left-second-in"><img src={home} alt="" /><Link to="/" className='link-tag'><h5>Home</h5></Link></div>
                <div className="LandPage-Left-second-in"><img src={category} alt="" /><Link to="/" className='link-tag'><h5>Category</h5></Link></div>
                <div className="LandPage-Left-second-in"><img src={wallet} alt="" /> <Link to="/" className='link-tag'><h5>Wallet</h5></Link></div>
                <div className="LandPage-Left-second-in"><img src={cart} alt="" /> <Link to="/" className='link-tag'><h5>Cart</h5></Link></div>
                <div className="LandPage-Left-second-in"><img src={userProfile} alt="" /> <Link to="/" className='link-tag'><h5>User Profile</h5></Link></div>
                <div className="LandPage-Left-second-in"><img src={settings} alt="" /> <Link to="/" className='link-tag'><h5>Settings</h5></Link></div>
              </div>
              <div className="LandPage-Left-third">
                <div className="LandPage-Left-third-in">
                <img src={logOut} alt="" />
                <h5>Log Out</h5>
                </div>
              </div>
            </div>
  )
}

export default Aside
