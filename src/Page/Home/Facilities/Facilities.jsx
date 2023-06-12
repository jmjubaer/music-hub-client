import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title';
import "./Ficilities.css"
import image1 from '../../../assets/facilities/1.png'
import image2 from '../../../assets/facilities/2.png'
import image3 from '../../../assets/facilities/3.png'
import image4 from '../../../assets/facilities/4.jpg'
import image5 from '../../../assets/facilities/5.jpg'
import image6 from '../../../assets/facilities/6.jpg'
import Aos from 'aos';
const Facilities = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: "ease-in-sine",
            // delay: 0,
        });
    }, []);
    return (
        <div className='my-28 jm_container'>
            <Title heading={"Our Some Facilities"} subHeading={"Explore our facilities"}></Title>
            <div className="grid grid-cols-2 gap-8 my-16">
                <div className="">
                  <div  data-aos="zoom-in" className="flex items-center gap-5 jm_shadow p-5 rounded-lg">
                    <img src={image1} alt="" />
                    <div className="">
                        <h3 className='text-2xl font-semibold mb-4'>Multimedia Class</h3>
                        <p className='leading-relaxed'>we offer an online learning platform that allows students to access educational materials, practice exercises, and video tutorials.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="flex items-center gap-5 jm_shadow p-5 rounded-lg my-8">
                    <img src={image2} alt="" />
                    <div className="">
                        <h3 className='text-2xl font-semibold mb-4'>Experienced Instructors</h3>
                        <p className='leading-relaxed'>We pride ourselves on having a team of expert instructors who are passionate about music and dedicated to helping students achieve their goals.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="flex items-center gap-5 jm_shadow p-5 rounded-lg">
                    <img src={image3} alt="" />
                    <div className="">
                        <h3 className='text-2xl font-semibold mb-4'>Instrument Rental Services</h3>
                        <p className='leading-relaxed'>For students who are just starting their musical journey or don't have access to their own instruments, we offer instrument rental services.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div data-aos="zoom-in" className="w-full h-1/2">
                        <img className='w-full h-full' src={image4} alt="" />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5 w-full h-[calc(50%-20px)]">
                        <img data-aos="fade-up-right" className='w-full h-full object-cover' src={image5} alt="" />
                        <img data-aos="fade-up-left" className='w-full h-full object-cover' src={image6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;