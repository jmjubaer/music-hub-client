import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuthContext from '../Hooks/UseAuthContext';
import Navbar from '../Page/Shered Page/Navbar';

const Main = () => {
    const {theme} =  useAuthContext();
    return (
        <div data-theme={theme}>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Main;