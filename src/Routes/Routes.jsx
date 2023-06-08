import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/home/Home";
import Login from "../Page/login/Login";
import Register from "../Page/login/Register";
import Profiles from "../Page/login/Profiles";
import NotFound from "../Page/Shered Page/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
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
            }
        ]
    }
])

export default routes;