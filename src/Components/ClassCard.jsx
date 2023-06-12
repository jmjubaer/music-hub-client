import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import useAuthContext from "../Hooks/UseAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAdmin from "../Hooks/useAdmin";
import useIsInstructor from "../Hooks/useIsInstructor";
import useAxiosSecured from "../Hooks/useAxiosSecured";
const ClassCard = ({ data }) => {
    const { isAdmin } = useAdmin();
    const { isInstructor } = useIsInstructor();
    const { axiosSecured } = useAxiosSecured();
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { className, enrolled, image, instructor, price, totalSeats, _id } =
        data || {};
    let available = 0;
    if (enrolled) {
        available = totalSeats - enrolled;
    } else {
        available = totalSeats;
    }
    const handleSelect = () => {
        if (!user) {
            Swal.fire({
                title: "Please logged in",
                text: "Yoy can't select course without logging",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        } else {
            const ClassInfo = {
                className,
                image,
                instructor,
                price,
                productId: _id,
                email: user?.email,
                status: "pending",
            };
            axiosSecured
                .post(
                    "https://summer-camp-server-fawn.vercel.app/selected",
                    ClassInfo
                )
                .then((response) => {
                    if (response?.data?.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Class selected successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else if (response?.data?.selected) {
                        Swal.fire({
                            icon: "warning",
                            title: "This Class already selected",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        }
    };

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: "ease-in-sine",
            // delay: 0,
        });
    }, []);
    return (
        <div
            data-aos="zoom-in"
            className="card max-w-[96%] mx-auto w-full text-gray-600 card-compact rounded-none border shadow-2xl relative dark:bg-main"
        >
            <figure>
                <img
                    src={image}
                    className="h-60 w-full border object-cover border-main rounded-b-full"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body text-left">
                <h2 className="text-2xl text-center font-semibold my-5">
                    {className}
                </h2>
                <div className="flex justify-between">
                    <p className="text-lg">
                        <span className="font-bold text-[#FF0078]">
                            Price:{" "}
                        </span>{" "}
                        ${price}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold text-[#FF0078]">
                            Total seat:{" "}
                        </span>{" "}
                        {totalSeats}
                    </p>
                </div>
                <p className="text-lg">
                    <span className="font-bold text-[#FF0078]">
                        Available seat:{" "}
                    </span>{" "}
                    {available}
                </p>
                <p className="text-lg">
                    <span className="font-bold text-[#FF0078]">
                        Instructor:{" "}
                    </span>{" "}
                    {instructor}
                </p>
                <button
                    disabled={available === 0 || isAdmin || isInstructor}
                    onClick={handleSelect}
                    className="jm_btn-tiny absolute top-0 right-0 text-lg btn_disabled"
                >
                    Select
                </button>
            </div>
            <div
                className={`absolute text-center bg-red-700 bg-opacity-60 dark:bg-red-200 dark:bg-opacity-50 w-full h-full items-center justify-center text-7xl leading-relaxed text-white ${
                    available == 0 ? "flex" : "hidden"
                }`}
            >
                <p>Not Available</p>
            </div>
        </div>
    );
};

export default ClassCard;
