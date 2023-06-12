import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import Title from "../../../../Components/Title";
import MyClassRow from "./MyClassRow";
import { FaTimes } from "react-icons/fa";

const MyClass = () => {
    const [open,setOpen] = useState(false);
    const [feedback,setFeedback] = useState("");
    const { user, loading } = useAuthContext();
    const { axiosSecured } = useAxiosSecured();
    const { data: myClasses } = useQuery({
        queryKey: ["myClass"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecured(`/myClasses?email=${user?.email}`);
            return res?.data;
        },
    });
    return (
        <div className="mx-5">
            <div className="mb-14">
                <Title heading={"My Class"}></Title>
            </div>
            {/* Modal======== */}
            <div className={`w-full h-screen flex justify-center items-center bg-main fixed top-0 left-0 z-50 bg-opacity-50 ${open ? "" : "hidden"}`}>
                <div className="w-1/2 p-5 h-60 overflow-auto relative rounded-lg bg-white">
                    <h2 className="text-4xl">Feedback</h2>
                    <p className="text-lg mt-5">{feedback}</p>
                    <button
                        className="text-3xl text-main absolute top-2 right-2"
                        onClick={() => setOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>

            <h2 className="text-4xl font-semibold my-3">Total Class: {myClasses?.length}</h2>
            {myClasses?.length > 0 ? (
                <>
                    <div className="overflow-x-auto">
                        <table className="table text-base">
                            <thead className="bg-main bg-opacity-90 text-base">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Class Name</th>
                                    <th>Enrolled</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myClasses?.map((item, idx) => (
                                    <MyClassRow
                                        item={item}
                                        idx={idx}
                                        key={item?._id}
                                        setFeedback={setFeedback}
                                        setOpen={setOpen}
                                    ></MyClassRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-center text-6xl text-main opacity-50 mt-20">
                        No Class Added
                    </h2>
                </>
            )}
        </div>
    );
};

export default MyClass;
