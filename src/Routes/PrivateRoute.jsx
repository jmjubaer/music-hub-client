import React from 'react';
import useAuthContext from '../Hooks/UseAuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Page/Shered Page/Loader';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuthContext();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
};

export default PrivateRoute;