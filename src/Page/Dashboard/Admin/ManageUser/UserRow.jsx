import React from 'react';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import Swal from 'sweetalert2';

const UserRow = ({item,idx,refetch}) => {
    const {name,email,role,image,_id} = item || {};
    const {axiosSecured} = useAxiosSecured();
    const makeAdmin = async() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Make the user Admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin'
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecured.put(`/makeAdmin/${_id}`)
                console.log(res);
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire(
                        'Success!',
                        'user Make Admin successful.',
                        'success'
                      )
                }  
            }
          })
    }
    const makeInstructor = async() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Make the user Instructor!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin'
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecured.put(`/makeInstructor/${_id}`)
                console.log(res);
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire(
                        'Success!',
                        'user Make Instructor successful.',
                        'success'
                      )
                }  
            }
          })
    }

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <img className='w-14 h-14' src={image} alt="" />
            </td>
            <td className='whitespace-nowrap'>{name}</td>
            <td>{email}</td>
            <td className='text-lime-500'>{role}</td>
            <td>
                <button disabled={role === "admin"|| role === "instructor"} onClick={makeAdmin} className='btn btn-info'>Admin</button>
            </td>
            <td>
                <button onClick={makeInstructor} disabled={role === "admin"|| role === "instructor"} className='btn btn-success'>Instructor</button>
            </td>
        </tr>
    );
};

export default UserRow;