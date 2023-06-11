import React from 'react';
import Title from '../../../../Components/Title';
import useAuthContext from '../../../../Hooks/UseAuthContext';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import UserRow from './UserRow';

const MangeUser = () => {
    const {loading} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const {data: user,refetch} = useQuery({
        queryKey: ['user'],
        enabled:!loading,
        queryFn: async() => {
            const res = await axiosSecured('/allUsers');
            return res.data;
        }
    })
    console.log(user);
    return (
        <div className="w-11/12 my-10">
            <Title heading={"Mange User"}></Title>
            <div className="overflow-auto h-[80vh] mt-16">
                <table className="table text-base">
                    <thead className="bg-main bg-opacity-90 text-base">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((item, idx) => (
                                    <UserRow
                                        item={item}
                                        idx={idx}
                                        key={item?._id}
                                    ></UserRow>
                                ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MangeUser;