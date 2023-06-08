import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'
import useAuthContext from '../Hooks/UseAuthContext';
const ClassCard = ({data}) => {
    useEffect(() =>{
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            // delay: 0,
        })
    },[])
    const {className,enrolled,image,instructor,price,totalSeats,_id} = data || {};
    const available = totalSeats - enrolled;
    // TODO : change design and select btn 
    return (
        <div data-aos="flip-right" className={`card text-gray-600 card-compact rounded-none border shadow-2xl relative dark:bg-main`}>
            <figure><img src={image} className='h-60 w-full border border-main rounded-b-full' alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="text-2xl text-center font-semibold my-5">{className}</h2>
                <div className="flex justify-between">
                    <p className='text-lg'><span className='font-bold text-[#FF0078]'>Price: </span> ${price}</p>
                    <p className='text-lg'><span className='font-bold text-[#FF0078]'>Total seat: </span> {totalSeats}</p>
                </div>
                <p className='text-lg'><span className='font-bold text-[#FF0078]'>Available  seat: </span> {available}</p>
                <p className='text-lg'><span className='font-bold text-[#FF0078]'>Instructor: </span> {instructor}</p>
                <button className='jm_btn-tiny absolute top-0 right-0 text-lg'>Select</button>
            </div>
        </div>
    );
};

export default ClassCard;