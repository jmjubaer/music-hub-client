import axios from 'axios';
import { useEffect } from 'react';
import useAuthContext from './UseAuthContext';
import { useNavigate } from 'react-router-dom';

const useAxiosSecured = () => {
    const {logout} = useAuthContext();
    const navigate = useNavigate();
    const axiosSecured = axios.create({
        baseURL: 'http://localhost:5000'
    })
    useEffect(()=> {
        axiosSecured.interceptors.request.use((request) => {
            const token = localStorage.getItem('music-hub-token');
            if (token) {
                request.headers.Authorization = `Bearer ${token}`
            }
            return request;
        })
        axiosSecured.interceptors.response.use((response) => response,
        async(error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // await logout();
                // navigate('/login')
                console.log(error.response);
            }
        }
    )
    },[]);
    return{axiosSecured}
};

export default useAxiosSecured;