import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../Hooks/UseAuthContext';
import Loader from '../Page/Shered Page/Loader';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { isAdmin } = useAdmin();
    const {user,loading} = useAuthContext();
    if(loading){
        return <Loader></Loader>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={"/"} replace></Navigate>
};

export default AdminRoute;