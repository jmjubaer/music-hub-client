import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../../Hooks/UseAuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import SocialLogin from "./SocialLogin";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useAuthContext();
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const hostingURL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_KEY
    }`;
    const handleSignUp = (data) => {
        if (!(data?.password === data?.confirm)) {
            toast("Password does not match. Please try again");
            return;
        }
        if (data?.password.length < 6) {
            toast("Password Must be at least 6 characters");
            return;
        }
        if (!/(?=.*[A-Z])/.test(data?.password)) {
            toast("Password Must have a capital letter");
            return;
        }

        if (!/^(?=.*[!@#$&*])/.test(data?.password)) {
            toast("Password Must have a special character");
            return;
        }

        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(hostingURL, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgRes) => {
                console.log(imgRes);
                if (imgRes.success) {
                    createUser(data?.email, data?.password)
                        .then((result) => {
                            const user = result.user;
                            updateProfile(user, {
                                displayName: data?.name,
                                photoURL: imgRes?.data?.display_url,
                            });
                            if (user) {
                                const newUser = {
                                    image: imgRes?.data?.display_url,
                                    name: data?.name,
                                    email: data?.email,
                                    role: "student",
                                };
                                axios
                                    .post(
                                        "https://summer-camp-server-fawn.vercel.app/user",
                                        newUser
                                    )
                                    .then((res) => {
                                        console.log(res.data);
                                        Swal.fire({
                                            icon: "success",
                                            title: "User created successful",
                                            showConfirmButton: false,
                                            timer: 1500,
                                        });
                                        reset();
                                        navigate("/");
                                    });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `${err.message}`,
                            });
                        });
                }
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-2/5 rounded-lg p-10 my-20 bg-[#d2d2d2] shadow-xl bg-opacity-30">
                <h2 className="text-4xl font-bold text-center my-5">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <input
                        required
                        className="jm_input"
                        placeholder="Enter your Name"
                        type="text"
                        {...register("name")}
                    />

                    <input
                        required
                        className="jm_input"
                        placeholder="Enter your Email"
                        type="email"
                        {...register("email")}
                    />

                    <div className="relative">
                        <input
                            required
                            className="jm_input"
                            placeholder="Enter your Password"
                            type={show ? "text" : "password"}
                            {...register("password")}
                        />
                        <span
                            className="absolute text-2xl bottom-6 right-5 text-[#fff] cursor-pointer"
                            onClick={() => setShow(!show)}
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            required
                            className="jm_input"
                            placeholder="Confirm Password"
                            type={show ? "text" : "password"}
                            {...register("confirm")}
                        />
                    </div>
                    {/* TODO : change design */}
                    <input
                        className="jm_input"
                        type="file"
                        required
                        {...register("image")}
                    />

                    <input
                        className="jm_btn rounded-3xl w-full"
                        type="submit"
                        value="Sign Up"
                    />
                </form>

                <p className="my-5">
                    Have an account ?{" "}
                    <Link
                        to={"/login"}
                        className="underline text-accent"
                        onClick={() => setCondition("login")}
                    >
                        Login Now.
                    </Link>
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
