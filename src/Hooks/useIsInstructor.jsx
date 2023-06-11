import useAuthContext from './UseAuthContext';
import useAxiosSecured from './useAxiosSecured';
import { useQuery } from '@tanstack/react-query';

const useIsInstructor = () => {
    // const []
    const {loading,user} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const {data: isInstructor,refetch} = useQuery({
        queryKey: ['isInstructor'],
        enabled: !loading,
        queryFn: async() => {
            if(user && user?.email){
                const res = await axiosSecured(`/user/instructor/${user?.email}`);
                return res?.data;
            }
            return "falsy"
        }
    })
    return {isInstructor,refetch}
};

export default useIsInstructor;