import React from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaGoogle,FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="bg-main bg-opacity-50 py-10">
            <div className="grid grid-cols-4 gap-10 py-5 border-b-2 border-amber-500 jm_container">
                <div className="col-span-2 self-center">
                    <Logo></Logo>
                    <p className="my-5">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <ul className="flex gap-4">
                        <li><a href="#" className="bg-[#D6BBC2] text-black border p-2 inline-block text-white"><FaGoogle/></a></li>
                        <li><a href="#" className="bg-[#D6BBC2] text-black border p-2 inline-block text-white "><FaTwitter/></a></li>
                        <li><a href="#" className="bg-[#D6BBC2] border text-black p-2 inline-block text-white"><FaInstagram/></a></li>
                        <li><a href="#" className="bg-[#D6BBC2] border text-black p-2 inline-block text-white"><FaLinkedin/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4 text-[]">Contact info</h3>
                    <ul>
                        <li>
                            <a className="hover:text-amber-600 my-4 block" href="#" >
                                <FaPhoneAlt className="inline mr-2 text-blue-600 text-xl" />
                                878 989 0000
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-amber-600 my-4 block"
                                href="#"
                            >
                                <FaEnvelope className="inline mr-2 text-blue-400 text-xl" />{" "}
                                jmjubaer@gmail.com
                            </a>
                        </li>
                        <li className="hover:text-amber-600 my-4 flex ">
                               <div className="">
                                    <FaMapMarkerAlt className="inline mr-2 text-blue-600 text-xl" />
                               </div>
                               <span> 4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA</span>
        
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-600 block my-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="hover:text-amber-600 block my-2"
                            >
                                Instructors 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/favorites"
                                className="hover:text-amber-600 block my-2"
                            >
                                Classes
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <p className="text-center my-5">
                © 2023. Music hub . All rights reserved.{" "}
            </p>
        </div>
    );
};

export default Footer;
