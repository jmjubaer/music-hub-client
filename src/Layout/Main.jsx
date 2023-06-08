import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuthContext from '../Hooks/UseAuthContext';
import Navbar from '../Page/Shered Page/Navbar';
import Footer from '../Page/Shered Page/Footer';

const Main = () => {
    const {theme} =  useAuthContext();
    return (
        <div data-theme={theme} >
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
            <   Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;