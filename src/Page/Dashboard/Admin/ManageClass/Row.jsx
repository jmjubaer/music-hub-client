import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import { FaTimes } from "react-icons/fa";
// todo: approve and deniy fn 
const Row = ({idx,item,refetch}) => {
  const {axiosSecured} = useAxiosSecured();
  const [feedback,setFeedback] = useState('')
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

    const handleFeedback = async(id) => {
      console.log(id);
      // const res = await axiosSecured.put(`/feedback/${item?._id}`,{feedback})
      // if(res.data.modifiedCount > 0 ){
      //   setFeedback('');
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'success',
      //     title: 'Feedback sent successful',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
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
                <button onClick={handleApproved} disabled={status === "approved"} className='btn btn-success'>approve</button>
            </td>
            <td>
                <button onClick={handleDenied} disabled={status === "approved"} className='btn btn-error'>denied</button>
            </td>
            <td>
                <div className="modal" id="my_modal_8">
                  <div className="modal-box relative">
                    <h3 className="font-bold text-lg">Feedback!</h3>
                    <form action="">
                      <input value={feedback} onChange={(e) => setFeedback(e.target.value)} className='jm_input' type="text" name="feedback" id="" />
                    </form>
                      <a onClick={() =>handleFeedback(_id)} href="#" className="btn">Send</a>
                      <a href="#" className="text-main text-2xl p-3 absolute top-0 right-0"><FaTimes/></a>
                    </div>
                </div>
                <a onClick={() => console.log(_id)} href="#my_modal_8"  className='btn btn-error'>feedback</a>
            </td>
        </tr>
      </>
    );
};

export default Row;