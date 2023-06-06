import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div data-theme="dark">
            <Outlet/>
        </div>
    );
};

export default Main;