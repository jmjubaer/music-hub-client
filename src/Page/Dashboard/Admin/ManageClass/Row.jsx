import React from 'react';

const Row = ({idx,item}) => {
    const {className,email,image,price,totalSeats,status,instructor} = item || {};
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <img className='w-12 h-12 rounded-md' src={image} alt="" />
            </td>
            <td>{className}</td>
            <td>{instructor}</td>
            <td>{email}</td>
            <td>{totalSeats}</td>
            <td>${price}</td>
            <td>
                <button disabled={status === "approved"} className='btn btn-success'>approve</button>
            </td>
            <td>
                <button disabled={status === "approved"} className='btn btn-error'>denied    </button>
            </td>
            <td>
                <button className='btn btn-error'>feedback</button>
            </td>
        </tr>
    );
};

export default Row;