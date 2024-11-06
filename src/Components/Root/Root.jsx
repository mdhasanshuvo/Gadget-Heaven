import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const WishContext = createContext([]);
export const CardContext = createContext([]);

const Root = () => {
    const [wish, setWish] = useState([]);
    const [card, setCard] = useState([]);


    return (
        <CardContext.Provider value={[card, setCard]}>
            <WishContext.Provider value={[wish, setWish]}>
                <div className='bg-[#F6F6F6]'>
                    <div className='container mx-auto'>
                        <Navbar></Navbar>
                    </div>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </WishContext.Provider>
        </CardContext.Provider>
    );
};

export default Root;