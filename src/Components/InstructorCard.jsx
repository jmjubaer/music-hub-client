import React from 'react';
import useAuthContext from '../Hooks/UseAuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// TODO: SET A button to navigate the instructor class page (optional)
const InstructorCard = ({instructors,classes}) => {
    const {image,name,email,_id} = instructors || {};
    const instructorsClasses = classes?.filter(c => c.email === email);
    return (
        <div className="card border rounded-none shadow-xl">
            <figure><img src={image} className='w-full h-80 object-cover' alt="Shoes" /></figure>
            <div className="p-5 text-center ">
                <h2 className="text-2xl font-bold text-sky-600">{name}</h2>
                <p className='font-bold'><span className='font-normal'>Email: </span> {email}</p>
                <div className="text-left mt-5">
                    <p className='text-lg font-bold my-2'>Total Class: {instructorsClasses?.length}</p>
                    <p className='text-lg font-bold'>Class Name:</p>
                    <div className='text-lg mt-3'>
                        {
                            instructorsClasses?.map((item,idx) => <li key={idx}>{item?.className}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;