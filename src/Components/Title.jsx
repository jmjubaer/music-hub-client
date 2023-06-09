import React, { useEffect } from 'react';
import useAuthContext from '../Hooks/UseAuthContext';
import Aos from 'aos';

const Title = ({heading,subHeading}) => {
    useEffect(() =>{
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            // delay: 0,
        })
    },[])
const {theme} = useAuthContext();
    return (
        <div data-aos="zoom-in" className={`text-center relative ${theme === "dark" && "dark"}`}>
            <h2 className='text-5xl'>{heading}</h2>
            <p className='text-[#E7B622] dark:text-main my-5 text-xl'>{subHeading}</p>
            <div className="absolute w-28 h-1 bg-main -bottom-5 dark:bg-white left-1/2 -translate-x-1/2"></div>
        </div>
    );
};

export default Title;