import React from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuthContext from '../../../Hooks/UseAuthContext';

const PopularClass = () => {
    const {loading} = useAuthContext();
    const {data} = useQuery({
        queryKey: ['popular'],
        enabled:!loading,
        queryFn: async() => {
            const res = await axios('http://localhost:5000/popularclasses');
            return res.data;
        }
    })
    console.log(data);
    return (
        <div className='my-24 jm_container'>
            <Title heading={"Our Popular Classes"} subHeading={"Explore our music class"}></Title>
            <div className="">
 
            </div>
        </div>
    );
};

export default PopularClass;