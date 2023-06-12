import React from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuthContext from '../../../Hooks/UseAuthContext';
import ClassCard from '../../../Components/ClassCard';
import useClasses from '../../../Hooks/useclasses';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const {theme} = useAuthContext();
    const {classes} = useClasses();
    const popular = classes?.slice(0,6);
    return (
        <section id='class' className={`my-24 jm_container ${theme === "dark" && "dark"} text-center`}>
            <Title heading={"Our Popular Classes"} subHeading={"Explore our classes"}></Title>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10">
                {
                    popular?.map(item => <ClassCard 
                    key={item?._id}
                    data={item}
                    ></ClassCard>)
                }
            </div>
            <Link to={"/classes"} className='block mx-auto w-fit mt-8'><button className='jm_btn rounded-sm '>See all Class</button></Link>
        </section>
    );
};

export default PopularClass;