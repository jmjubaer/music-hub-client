import React from 'react';
import pattern from "../assets/pattern.png"
const Cover = ({title}) => {
    return (
        <div className='bg-main dark:bg-white dark:text-gray-700 bg-opacity-80 text-white py-20 relative mt-5'> 
            <h2 className='text-center text-5xl'>{title}</h2>
            <img className='absolute -bottom-5 w-full' src={pattern} alt="" />
            <img className='absolute -top-5 w-full' src={pattern} alt="" />
        </div>
    );
};

export default Cover;