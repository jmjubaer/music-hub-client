import React from 'react';
import useIsInstructor from '../Hooks/useIsInstructor';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../Hooks/UseAuthContext';
import Loader from '../Page/Shered Page/Loader';

const InstructorRoute = ({children}) => {
    const {isInstructor} = useIsInstructor();
    const {user,loading} = useAuthContext();
    if(loading) {
        return <Loader/>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to={"/"}></Navigate>
};

export default InstructorRoute;