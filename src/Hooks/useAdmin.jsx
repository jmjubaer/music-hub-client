import { useQuery } from '@tanstack/react-query';
import useAuthContext from './UseAuthContext';
import useAxiosSecured from './useAxiosSecured';

const useAdmin = () => {
    const {loading,user} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const {data: isAdmin,refetch} = useQuery({
        queryKey: ['isAdmin'],
        enabled:!loading,
        queryFn: async() => {
            if(user?.email){
                const res = await axiosSecured(`/user/admin?email=${user?.email}`);
                return res?.data;
            }
            return false
        }
    })
    return {isAdmin,refetch}
};

export default useAdmin;