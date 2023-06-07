import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/UseAuthContext";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "./SocialLogin";

const Login = () => {
    const { register, handleSubmit,reset} = useForm();
    const location = useLocation()
    const from = location?.state?.from || "/";
    const navigate = useNavigate();
    const {signIn} =  useAuthContext()
    const [show,setShow] = useState(false);
    const handleSignIn = (data) => {
        console.log(data);
        signIn(data?.email, data?.password)
        .then(result => {
            const user = result.user;
            Swal.fire({
                icon: 'success',
                title: 'User Login successful',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
            navigate('/')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`
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

                <input className="jm_btn rounded-3xl w-full" type="submit" value="Login" />
            </form>
            <p className="my-5">New Music hub ? <Link to={"/signup"} className="underline text-accent">Create Account.</Link></p>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
        </div>
    </div>
  );
};

export default Login;
