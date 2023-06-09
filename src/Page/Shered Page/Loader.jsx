import React from 'react';
import loader from '../../assets/loading.json';
import  Lottie from 'lottie-react';
const Loader = () => {
    return (
        <div className='flex justify-normal items-center h-screen'>
            <div className="w-60 h-60 mx-auto">
                <Lottie animationData={loader} loop={true} />
            </div>
        </div>
    );
};

export default Loader;