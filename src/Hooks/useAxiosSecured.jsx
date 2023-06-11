import axios from 'axios';
import { useEffect } from 'react';
import useAuthContext from './UseAuthContext';
import { useNavigate } from 'react-router-dom';
const axiosSecured = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecured = () => {
    const {logout} = useAuthContext();
    const navigate = useNavigate();
    useEffect(()=> {
        axiosSecured.interceptors.request.use((config) => {
            const token = localStorage.getItem('music-hub-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });
        axiosSecured.interceptors.response.use((response) => response,
            async(error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await logout();
                    // navigate('/login')
                    console.log(error?.response);
                }
            }
        )
    },[logout,navigate,axiosSecured])
    return {axiosSecured};
};

export default useAxiosSecured;