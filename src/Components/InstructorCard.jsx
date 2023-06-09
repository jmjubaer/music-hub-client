import React from 'react';

const InstructorCard = ({data}) => {
    console.log(data);
    const {image,name,email,_id} = data || {};
    return (
        <div className="card border rounded-none shadow-xl">
            <figure><img src={image} className='w-full h-80 object-cover' alt="Shoes" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-sky-600">{name}</h2>
                <p className='font-bold'><span className='font-normal'>Email: </span> {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;