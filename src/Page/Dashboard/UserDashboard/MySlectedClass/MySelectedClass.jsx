import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import Title from "../../../../Components/Title";
import ClassRow from "./ClassRow";

const MySelectedClass = () => {
    const {user,loading } = useAuthContext();
    const { axiosSecured } = useAxiosSecured();
    const { data: classes,refetch } = useQuery({
        queryKey: ["selected"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecured(`/selectedclass?email=${user.email}`);
            return res?.data;
        },
    });
    return (
        <div className=" mx-5">
            <div className="mb-14">
                <Title heading={"My Selected Class"}></Title>
            </div>
            <h2 className="text-4xl my-4">Total Selected: {classes?.length}</h2>
            {classes?.length > 0 ? (
                <>
                    <div className="overflow-x-auto">
                        <table className="table text-base">
                            <thead className="bg-main bg-opacity-90 text-base">
                                <tr>
                                    <th>#</th>
                                    <th>Class</th>
                                    <th>Instructor</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classes?.map((item, idx) => (
                                    <ClassRow
                                        refetch={refetch}
                                        item={item}
                                        idx={idx}
                                        key={item?._id}
                                    ></ClassRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                <h2 className="text-center text-6xl text-main opacity-50 mt-20">No Class Selected</h2>
                </>
            )}
        </div>
    );
};

export default MySelectedClass;
