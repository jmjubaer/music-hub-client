import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuthContext from '../Hooks/UseAuthContext';

const Main = () => {
    const {theme} =  useAuthContext();
    return (
        <div data-theme={theme}>
            <Outlet/>
        </div>
    );
};

export default Main;