import React, { useState } from "react";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import Title from "../../../../Components/Title";
import Row from "./Row";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClass = () => {
    const [id,setId] = useState("");
    const [open,setOpen] = useState(false);
    const { user, loading } = useAuthContext();
    const { axiosSecured } = useAxiosSecured();
    const { data: allclasses, refetch } = useQuery({
        queryKey: ["class", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecured(`/allclasses?email=${user?.email}`);
            return res?.data;
        },
    });
    const handleFeedback = async(event) => {
        event.preventDefault()
        const feedback = event.target.feedback.value;
        const res = await axiosSecured.put(`/feedback/${id}`,{feedback})
        if(res.data.modifiedCount > 0 ){
            event.target.reset();
            setOpen(false)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Feedback sent successful',
                showConfirmButton: false,
                timer: 1500
            })
        }
      }
    return (
        <div className="mx-5 my-10">
            <Title heading={"Mange class"}></Title>
            <h2 className='text-3xl font-medium mb-3 mt-10'>Total Class: {allclasses?.length}</h2>
            <div className="overflow-auto h-[75vh]">
                <div className={`w-full h-screen flex justify-center items-center bg-main fixed top-0 left-0 z-50 bg-opacity-50 ${open ? "" : "hidden"}`}>
                    <div className="w-1/2 h-60 relative rounded-lg bg-white">
                        <h2 className="text-4xl ml-4 mt-5">Feedback</h2>
                        <form onSubmit={() => handleFeedback(event)} className="my-5 mx-10" action="">
                            <input placeholder="Your Feedback" className="jm_input" type="text" name="feedback" required/>
                            <input type="submit" value="Send" className="btn px-8 absolute bottom-5 right-5" />
                        </form>

                        <button className="text-3xl text-main absolute top-2 right-2" onClick={() => setOpen(false)}><FaTimes/></button> 
                    </div>
                </div>
                <table className="table text-base">
                    <thead className="bg-main bg-opacity-90 text-base">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allclasses?.map((item,idx) => (
                                    <Row
                                        setOpen={setOpen}
                                        item={item}
                                        refetch={refetch}
                                        idx={idx}
                                        key={item?._id}
                                        setId={setId}
                                    ></Row>
                                ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
