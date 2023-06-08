import React from 'react';
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img className="w-12 mr-2 h-12 object-cover rounded-xl" src={logo} alt="" />
            <span className="font-logo text-4xl text-black">Music hub</span>
        </Link>
    );
};

export default Logo;