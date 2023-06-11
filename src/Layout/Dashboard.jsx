import React from "react";
import { FaBars, FaBookOpen, FaCalendarAlt, FaCalendarCheck, FaCalendarPlus, FaHome, FaUser, FaUsers, FaUsersCog } from "react-icons/fa";
import Logo from "../Page/Shered Page/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const {isAdmin} = useAdmin();
    const isInstructor = false;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content overflow-hidden flex items-center justify-center">
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary fixed top-5 right-5 drawer-button lg:hidden"
                >
                    <FaBars></FaBars>
                </label>
            </div>
            <div className="drawer-side h-screen">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu h-fit p-4 w-80 bg-main bg-opacity-80 text-base-content">
                    {/* Sidebar content here */}
                    <li className="my-8">
                       <Logo></Logo>
                    </li>
                    
                    <div className="divider"></div>
                    {
                        isAdmin ? 
                        <>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/manageclass'}>
                                <FaUsersCog/>Manage  Classes</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/manageuser'}>
                                <FaUsers/>Manage Users</NavLink>
                        </li>
                        
                        </> : (isInstructor) ?
                        <>      
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/selectedclass'}>
                                <FaCalendarPlus/>Add a Class</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/enrolledclass'}>
                                <FaCalendarAlt/>My Classes</NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/selectedclass'}><FaCalendarCheck/> My Selected Classes</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/enrolledclass'}><FaCalendarPlus/> My Enrolled Classes</NavLink>
                        </li>
                        </>
                    }
                    

                    <div className="divider"></div>

                    <li>
                        <Link to={'/'}><FaHome/>Home</Link>
                    </li>
                    <li>
                    <Link to={'/classes'}><FaBookOpen/>Classes</Link>
                    </li>
                    <li>
                    <Link to={'/instructors'}><FaUser/>Instructors</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
