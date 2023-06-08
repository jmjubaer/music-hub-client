import React from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuthContext from '../../../Hooks/UseAuthContext';
import ClassCard from '../../../Components/ClassCard';
import useClasses from '../../../Hooks/useclasses';

const PopularClass = () => {
    const {theme} = useAuthContext();
    const {classes} = useClasses();
    const popular = classes?.slice(0,6);
    return (
        <div className={`my-24 jm_container ${theme === "dark" && "dark"} text-center`}>
            <Title heading={"Our Popular Classes"} subHeading={"Explore our music class"}></Title>
            <div className="grid grid-cols-3 gap-8 mt-20 mb-10">
                {
                    popular?.map(item => <ClassCard 
                    key={item?.id}
                    data={item}
                    ></ClassCard>)
                }
            </div>
            <button className='jm_btn rounded-sm '>See all Class</button>
        </div>
    );
};

export default PopularClass;