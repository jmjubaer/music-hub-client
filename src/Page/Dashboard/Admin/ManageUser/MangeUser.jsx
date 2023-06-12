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
            return res?.data;
        }
    })
    return (
        <div className="mx-5 my-10">
            <Title heading={"Mange User"}></Title>
            <h2 className='text-3xl font-medium mb-3 mt-10'>Total User: {user?.length}</h2>
            <div className="overflow-auto h-[80vh]">
                <table className="table text-base">
                    <thead className="bg-main bg-opacity-90 text-base">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((item, idx) => (
                                    <UserRow
                                        item={item}
                                        refetch={refetch}
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