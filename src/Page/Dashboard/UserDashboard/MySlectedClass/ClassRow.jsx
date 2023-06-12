import React from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import Swal from "sweetalert2";
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
        console.log(res.data);
        if(res?.data?.modifiedCount > 0){
            const res = await axiosSecured.get(`/confirmEnrolled/${productId}`)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment successful',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(res?.data);
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
                <button onClick={handlePayment} className="btn btn-info">Pay</button>
            </th>
            <th>
                <button onClick={handleDelete} className="btn btn-error text-white"><FaTrashAlt/></button>
            </th>
        </tr>
    );
};

export default ClassRow;
