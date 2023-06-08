import React from 'react';
import animation from '../../assets/animation.json' 
import { useNavigate, useRouteError } from 'react-router-dom';
import  Lottie from 'lottie-react';

const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    return (
        <div className= 'text-center p-5 text-yellow-300 flex flex-col items-center justify-center min-h-screen mb-10'>
           <div className="w-1/3">
            <Lottie animationData={animation} loop={true} />
           </div>
            <p className='text-3xl md:text-5xl  mt-0'>{error?.error?.message}</p>
            <button className='mt-8 px-5 py-3 bg-main text-white text-2xl rounded-md' onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default NotFound;