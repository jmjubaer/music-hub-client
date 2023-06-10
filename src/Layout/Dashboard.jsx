import React from "react";
import { FaBars, FaCalendarCheck, FaCalendarPlus } from "react-icons/fa";
import Logo from "../Page/Shered Page/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-center">
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    <FaBars></FaBars>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-main bg-opacity-80 text-base-content">
                    {/* Sidebar content here */}
                    <li className="my-8">
                       <Logo></Logo>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/selectedclass'}><FaCalendarCheck/> My Selected Classes</NavLink>
                    </li>
                    <li>
                    <NavLink className={({ isActive }) => isActive ? "text-[#C3345F] bg-white": ""} to={'/dashboard/enrolledclass'}><FaCalendarPlus/> My Enrolled Classes</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
