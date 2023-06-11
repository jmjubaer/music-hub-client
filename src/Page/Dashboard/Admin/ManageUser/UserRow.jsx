import React from 'react';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';

const UserRow = ({item,idx}) => {
    const {name,email,role,image,_id} = item || {};
    const {axiosSecured} = useAxiosSecured();
    const makeAdmin = async() => {
        console.log(_id);
        const res = await axiosSecured.put(`/makeAdmin/${_id}`)
        console.log(res.data);  
    }
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <img className='w-14 h-14' src={image} alt="" />
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <button onClick={makeAdmin} className='btn btn-info'>Admin</button>
            </td>
            <td>
                <button className='btn btn-success'>Instructor</button>
            </td>
        </tr>
    );
};

export default UserRow;