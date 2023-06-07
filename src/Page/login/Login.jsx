import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash,FaEye, FaGoogle, FaGithub, FaUser, FaCamera } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/UseAuthContext";
// import SocialLogin from "./SocialLogin";
import bg from '../../assets/login/login-bg.jpg'
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";

const Login = () => {
    const { register, handleSubmit} = useForm();
    const location = useLocation()
    const from = location?.state?.from || "/";
    const navigate = useNavigate();
    const {signIn} =  useAuthContext()
    const [show,setShow] = useState(false);
    const [err, setErr] = useState("");
    const handleSignIn = (data) => {
        console.log(data);
        signIn(data?.email, data?.password)
        .then(result => {
            const user = result.user;
            updateProfile(user,{
                displayName: data?.name,
            })
        })
    }


  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-2/5 rounded-lg p-10 my-20 bg-[#d2d2d2]  shadow-xl bg-opacity-30">
            <h2 className="text-4xl font-bold text-center my-5">login</h2>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <input required className="jm_input" placeholder="Enter your Email" type="email" {...register("email")} />

                <div className="relative">
                    <input required className="jm_input" placeholder="Enter your Password" type={show ? "text" : "password"} {...register("password")} />
                    <span className='absolute text-2xl bottom-6 right-5 text-[#fff] cursor-pointer' onClick={()=> setShow(!show)}>
                    {
                        show ? <FaEyeSlash /> : <FaEye/>
                    }
                        </span>
                </div>

                <span className="text-[red]">{err}</span>
                <input className="jm_btn rounded-3xl w-full" type="submit" value="Login" />
            </form>
            <p className="my-5">New Music hub ? <Link to={"/signup"} className="underline text-accent">Create Account.</Link></p>
            <div className="divider">OR</div>
            <div className="flex gap-5">
                <button className="flex jm_btn rounded-md w-full items-center">
                    <div className="">
                        <FaGoogle className="text-2xl text-[#E94235]"/> 
                    </div>
                    <span className="text-center w-full">Google</span>
                </button>
                <button className="flex jm_btn rounded-md w-full items-center">
                    <div className="">
                        <FaGithub className="text-2xl text-black"/> 
                    </div>
                    <span className="text-center w-full">GitHub</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Login;
