import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import { FaTimes } from "react-icons/fa";
const Row = ({idx,item,refetch,setOpen,setId}) => {
  const {axiosSecured} = useAxiosSecured();
    const {className,email,image,price,totalSeats,status,instructor,_id} = item || {};

    const handleApproved = async() => {
      const res = await axiosSecured.put(`/approved/${_id}`)
      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class Approved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }

    const handleDenied = async() => {
      const res = await axiosSecured.put(`/denied/${_id}`)
      if(res.data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Class denied',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }

    const handleConditions = () => {
      setOpen(true)
      setId(_id)
    }
    return (
      <> 
          {/* Table row  */}
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
                <button onClick={handleApproved} disabled={status === "approved" || status === "denied"} className='btn btn-success'>approve</button>
            </td>
            <td>
                <button onClick={handleDenied} disabled={status === "approved" || status === "denied"} className='btn btn-error'>denied</button>
            </td>
            <td>
                <button onClick={handleConditions} className='btn btn-error'>feedback</button>
            </td>
        </tr>
      </>
    );
};

export default Row;