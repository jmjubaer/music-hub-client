import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/home/Home";
import Login from "../Page/login/Login";
import Register from "../Page/login/Register";
import Profiles from "../Page/login/Profiles";
import NotFound from "../Page/Shered Page/NotFound";
import Classes from "../Page/Classes/Classes";
import Instructor from "../Page/Instractor/Instructor";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Page/Dashboard/UserDashboard/MySlectedClass/MySelectedClass";
import MyEnrolledClass from "../Page/Dashboard/UserDashboard/MyEnrolledClass/MyEnrolledClass";
import PrivateRoute from "./PrivateRoute";
import ManageClass from "../Page/Dashboard/Admin/ManageClass/ManageClass";
import MangeUser from "../Page/Dashboard/Admin/ManageUser/MangeUser";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Register/>
            },
            {
                path: '/profile',
                element: <Profiles/>
            },
            {
                path: '/classes',
                element: <Classes/>
            },
            {
                path: '/instructors',
                element: <Instructor/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: 'selectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'enrolledclass',
                element: <MyEnrolledClass/>
            },
            {
                path: 'manageclass',
                element: <ManageClass/>
            },
            {
                path: 'manageuser',
                element: <MangeUser/>
            }
        ]
    }
])

export default routes;