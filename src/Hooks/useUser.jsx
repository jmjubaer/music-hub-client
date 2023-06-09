import React from 'react';
import useAuthContext from './UseAuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useUser = () => {
    const {loading} = useAuthContext();
    const {data: user,refetch,loading: classLoading} = useQuery({
        queryKey: ['user'],
        enabled:!loading,
        queryFn: async() => {
            const res = await axios('http://localhost:5000/user');
            return res.data;
        }
    })
    return {user,refetch,userLoading}
};

export default useUser;