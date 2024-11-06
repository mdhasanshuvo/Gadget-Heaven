import React, { useState } from 'react';
import WishList from '../WishList/WishList';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";
import './dashboard.css'

const Dashboard = () => {
    const [showCart, setShowCart] = useState(true);
    const [showWishList, setShowWishList] = useState(false);

    const handleCart = () => {
        setShowCart(true);
        setShowWishList(false);
        // -----------------------------------------------------------
        document.getElementById('cart').classList.add('bg-black');
        document.getElementById('wish').classList.remove('bg-black');
        // ------------------------------------------------------
    };

    const handleWish = () => {
        setShowWishList(true);
        setShowCart(false);
        document.getElementById('wish').classList.add('bg-black');
        document.getElementById('cart').classList.remove('bg-black');
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] py-20 text-white text-center space-y-4'>
                <h2 className='text-3xl font-bold
            '>Dashboard</h2>
                <p className='w-3/6 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <NavLink id='cart' onClick={handleCart} className="btn btn-outline rounded-xl m-3 text-white">Cart</NavLink>
                <NavLink id='wish' onClick={handleWish} className="btn btn-outline rounded-xl m-3 text-white">Wishlist</NavLink>
            </div>
            {showCart && <Cart></Cart>}
            {showWishList && <WishList></WishList>}
        </div>
    );
};

export default Dashboard;