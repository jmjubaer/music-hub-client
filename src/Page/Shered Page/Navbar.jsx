import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import useAuthContext from "../../Hooks/UseAuthContext";
import Logo from "./Logo";
import useAdmin from "../../Hooks/useAdmin";
import useIsInstructor from "../../Hooks/useIsInstructor";

const Navbar = () => {
    const { user,toggleTheme } = useAuthContext();
    const [control, setControl] = useState(false);
    const {isAdmin} = useAdmin();
    const {isInstructor} = useIsInstructor();
    return (
        <div className="bg-main jm_container_lg z-50 bg-opacity-50 px-5 py-3 text-white">
            <nav className="flex lg:grid lg:grid-cols-5 justify-between items-center">
                <div className="lg:col-span-2 flex gap-2">
                    <Logo></Logo>
                </div>

                <div className={`jm_nav ${
                        control ? "w-4/5 md:w-1/2 p-5" : "w-0"
                    }`}
                >
                    <ul className="flex flex-col lg:flex-row gap-3 lg:gap-x-7">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-[#FC5640]" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "text-[#FC5640]" : ""
                                }
                                to="/instructors"
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "text-[#FC5640]" : ""
                                }
                                to="/classes"
                            >
                                Classes
                            </NavLink>
                        </li>
                        {
                            user && <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "text-[#FC5640]" : ""
                                }
                                to={isAdmin ? "/dashboard/manageclass" 
                                :(isInstructor) ? 
                                "/dashboard/myClass"
                                :"/dashboard/selectedclass"}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        }
                    </ul>
                    <div className="flex-row-reverse flex lg:flex-row justify-end lg:mt-0 mt-5 items-center gap-5">
                        <Tooltip id="my-tooltip" />
                        <label onChange={toggleTheme} className="swap swap-rotate">
                            <input type="checkbox" />

                            <svg
                                className="swap-on fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg
                                className="swap-off fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        {user ? (
                            <Link
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user?.displayName}
                                data-tooltip-place="top"
                                to="/profile"
                            >
                                <img
                                    data-tooltip-id="my-tooltip"
                                    className="w-12 h-12 rounded-full object-cover border bg-white"
                                    src={user?.photoURL}
                                    alt=""
                                />
                            </Link>
                        ) : (
                            <Link
                                className="btn btn-outline text-white rounded-full"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => setControl(!control)}
                    className="block lg:hidden"
                >
                    {control ? <FaTimes /> : <FaBars />}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
