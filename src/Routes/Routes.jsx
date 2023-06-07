import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/home/Home";
import Login from "../Page/login/Login";
import Register from "../Page/login/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            }
        ]
    }
])

export default routes;