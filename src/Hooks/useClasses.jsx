import axios from 'axios';
import useAuthContext from './UseAuthContext';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const {loading} = useAuthContext();
    const {data: classes,refetch,loading: classLoading} = useQuery({
        queryKey: ['popular'],
        enabled:!loading,
        queryFn: async() => {
            const res = await axios('http://localhost:5000/classes');
            return res.data;
        }
    })
    return {classes,refetch,classLoading}
};

export default useClasses;