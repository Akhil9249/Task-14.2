import React, { useEffect, useState } from "react";
import "./LandPage.css";
// import MySVGComponent from "./MySVGComponent";
// import axios from "axios";
// import buyLogo from '../../public/buy-cart-online-svgrepo-com.svg'
// import callLogo from '../../public/call-communication-device-svgrepo-com.svg'
// import notificationLogo from '../../public/notification-svgrepo-com.svg'
// import chatLogo from '../../public/chat-chatting-communication-svgrepo-com.svg'
// import home from '../../public/home-svgrepo-com.svg'
// import category from '../../public/category-svgrepo-com.svg'
// import wallet from '../../public/wallet-2-svgrepo-com.svg'
// import cart from '../../public/cart-check-svgrepo-com.svg'
// import userProfile from '../../public/user-profile-account-person-svgrepo-com.svg'
// import settings from '../../public/settings-svgrepo-com.svg'
// import logOut from '../../public/log-out-1-svgrepo-com.svg'



// const URL_F = "https://fakestoreapi.com/products";
const LandPage = () => {
    // const [searchResult, setSearchResult] = useState([]);
    // const getMovie = async () => {
    //     const response = await axios(URL_F);
    //     const Result = response.data.filter((data, index) => index <= 7);
    //     setSearchResult(Result);
    //     console.log(Result);
    // };

    // useEffect(() => {
    //     getMovie();
    // }, []);
    return (
        <></>
        // <div className="LandPage">
        //     <div className="LandPage-Left">
        //       <div className="LandPage-Left-first"><img src={shopping} alt="" /><h2>OnShop</h2></div>
        //       <div className="LandPage-Left-second">
        //         <div className="LandPage-Left-second-in"><img src={home} alt="" /><h5>Home</h5></div>
        //         <div className="LandPage-Left-second-in"><img src={category} alt="" /><h5>Category</h5></div>
        //         <div className="LandPage-Left-second-in"><img src={wallet} alt="" /><h5>Wallet</h5></div>
        //         <div className="LandPage-Left-second-in"><img src={cart} alt="" /><h5>Cart</h5></div>
        //         <div className="LandPage-Left-second-in"><img src={userProfile} alt="" /><h5>User Profile</h5></div>
        //         <div className="LandPage-Left-second-in"><img src={settings} alt="" /><h5>Settings</h5></div>
        //       </div>
        //       <div className="LandPage-Left-third">
        //         <div className="LandPage-Left-third-in">
        //         <img src={logOut} alt="" />
        //         <h5>Log Out</h5>
        //         </div>
              
        //       </div>
        //     </div>
        //     <div className="LandPage-right">
        //         <div className="LandPage-right-top-main">
        //             <div className="LandPage-right-top-sub-left">
        //                 <div className="LandPage-right-top-input">
        //                     <input type="text" placeholder="Search Product" className="Search-input" />
        //                 </div>
        //             </div>
        //             <div className="LandPage-right-top-sub-right">
        //                 <div className="LandPage-right-top-sub-right-first-sub">
        //                     <img src={callLogo} alt="" />
        //                 </div>
        //                 <div className="LandPage-right-top-sub-right-first-sub">
        //                     <img src={chatLogo} alt="" />
        //                 </div>
        //                 <div className="LandPage-right-top-sub-right-first-sub">
        //                     <img src={notificationLogo} alt="" />
        //                 </div>
        //                 <div className="LandPage-right-top-sub-right-second-sub">
        //                     <h3>welcome</h3>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="LandPage-right-center">Products</div>
        //         <div className="LandPage-right-bottom-main">
        //             {searchResult.map((data) => (
        //                 <div className="LandPage-right-bottom-main-sub">
        //                     <div className="Product-image">
        //                         <img src={data.image} alt="" className="Product-image-in" />
        //                     </div>
        //                     <div className="Product-logo">
        //                        <img src={buyLogo} alt="" />
        //                     </div>
        //                     <div className="Product-name">
        //                         <p>{data.category}</p>
        //                     </div>
        //                     <div className="Product-price-tag">
        //                         <p>{`$ ${data.price}`}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default LandPage;
