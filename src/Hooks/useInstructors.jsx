import React from 'react';
import useAuthContext from './UseAuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructors = () => {
    const {loading} = useAuthContext();
    const {data: classes,refetch,loading: classLoading} = useQuery({
        queryKey: ['instructor'],
        enabled:!loading,
        queryFn: async() => {
            const res = await axios('http://localhost:5000/instructors');
            return res.data;
        }
    })
    return {classes,refetch,classLoading}
};

export default useInstructors;