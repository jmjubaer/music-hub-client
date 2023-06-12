import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import useAuthContext from "../../Hooks/UseAuthContext";
import Loader from "../Shered Page/Loader";

const Profiles = () => {
  const { user,logout,loading,theme } = useAuthContext();
const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate("/")
  }
  if(loading){
    return <Loader/>;
  }
return (
    <div className={`min-h-screen flex items-center justify-center my-10 w-full mx-auto p-3 md:p-10 rounded-3xl ${theme === "dark" && "dark"}`}>
        <div className="text-center w-full md:w-4/5 lg:w-2/3 max-w-[600px] rounded-xl flex flex-col gap-4 bg-secondery bg-opacity-20 p-5 md:p-10 dark:text-white">
            <img className="w-64 mx-auto h-64 rounded-full object-cover border-8 border-dashed p-2 border-main" src={user?.photoURL} alt="" />
            <div className="flex rounded-3xl gap-5 items-center p-3 dark:bg-main jm_input my-8">
              <FaUser className="text-3xl"/>
              <div className="border-l-2 text-left pl-5">
                <h4 className="font-bold">Full Name:</h4>
                <p className="text-xl">{user?.displayName}</p>
              </div>
            </div>

            <div className="flex rounded-3xl gap-5 items-center p-3 dark:bg-main jm_input my-8">
              <div className="">
                <FaEnvelope className="text-3xl"/>
              </div>
              <div className="border-l-2 text-left pl-5 w-full">
                <h4 className="font-bold">Email:</h4>
                <div className="text-xl text-ellipsis overflow-hidden w-4/5 whitespace-nowrap">{user?.email}</div>
              </div>
            </div>

            <div className="flex rounded-3xl gap-5 items-center p-3 dark:bg-main jm_input my-8">
              <FaPhoneAlt className="text-3xl"/>
              <div className="border-l-2 text-left pl-5">
                <h4 className="font-bold">Mobile Number</h4>
                <p className="text-xl">{user?.phoneNumber}</p>
              </div>
            </div>
            <button onClick={handleSignOut} className="jm_btn mx-auto text-xl rounded-md mt-5">Log out</button>
        </div>
    </div>
    );

};

export default Profiles;
