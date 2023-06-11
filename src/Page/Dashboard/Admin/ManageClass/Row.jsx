import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import { FaTimes } from "react-icons/fa";
// todo: approve and deniy fn 
const Row = ({idx,item}) => {
  const {axiosSecured} = useAxiosSecured();
  const [feedback,setFeedback] = useState('')
    const {className,email,image,price,totalSeats,status,instructor} = item || {};
    const handleFeedback = async(id) => {
      const res = await axiosSecured.put(`/feedback/${item?._id}`,{feedback})
      if(res.data.modifiedCount > 0 ){
        setFeedback('');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Feedback sent successful',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
    return (
      <> 
          <div className="modal" id="my_modal_8">
            <div className="modal-box relative">
              <h3 className="font-bold text-lg">Feedback!</h3>
              <form action="">
                <input value={feedback} onChange={(e) => setFeedback(e.target.value)} className='jm_input' type="text" name="feedback" id="" />
              </form>
                <a onClick={handleFeedback} href="#" className="btn">Send</a>
                <a href="#" className="text-main text-2xl p-3 absolute top-0 right-0"><FaTimes/></a>
              </div>
          </div>

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
                <button disabled={status === "approved"} className='btn btn-success'>approve</button>
            </td>
            <td>
                <button disabled={status === "approved"} className='btn btn-error'>denied    </button>
            </td>
            <td>
                <a href="#my_modal_8"  className='btn btn-error'>feedback</a>
            </td>
        </tr>
      </>
    );
};

export default Row;