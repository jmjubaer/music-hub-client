import React from "react";
import { FaInfo, FaInfoCircle, FaTrash, FaTrashAlt } from "react-icons/fa";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import Swal from "sweetalert2";
import { AiFillWarning } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
// TODO: Paymen method setup
const ClassRow = ({item,idx,refetch}) => {
    const {axiosSecured} = useAxiosSecured();
    const {className,image,instructor,productId,price,_id} = item || {};
    const handleDelete =() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Remove the class from select list!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecured.delete(`/selectedclass/${_id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Removed!',
                            'Removed class from selected list',
                            'success'
                          )
                    }
                })

            }
          })
    }
    const handlePayment = async() => {
        const res = await axiosSecured.put(`/enrolled/${_id}`)
        if(res?.data?.modifiedCount > 0){
            const res = await axiosSecured.get(`/confirmEnrolled/${productId}`)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment successful',
                showConfirmButton: false,
                timer: 1500
              })
            refetch()
        }
    }
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>{instructor}</td>
            <td>${price}</td>
            <th>
            <div className="indicator">
                <Tooltip id="my-tooltip" />
                <span data-tooltip-id="my-tooltip" data-tooltip-content={"This Button Work not perfectly. It confirm payment without payment Info."} data-tooltip-place="top" className="indicator-item top-0 right-1 cursor-pointer"><FaInfoCircle className="text-2xl text-red-600"/></span> 
                    <button onClick={handlePayment} className="btn btn-info">Pay</button>
                </div>
            </th>
            <th>
                <button onClick={handleDelete} className="btn btn-error text-white"><FaTrashAlt/></button>
            </th>
        </tr>
    );
};

export default ClassRow;
