import React from "react";
import EnrolledClassRow from "./EnrolledClassRow";
import Title from "../../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";

const MyEnrolledClass = () => {
    const { loading } = useAuthContext();
    const { axiosSecured } = useAxiosSecured();
    const { data: classes } = useQuery({
        queryKey: ["selected"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecured("/enrolledclass");
            return res?.data;
        },
    });
    return (
        <div className="w-11/12">
            <div className="mb-14">
                <Title heading={"My Enrolled Class"}></Title>
            </div>
            {classes?.length > 0 ? (
                <>
                    <div className="overflow-x-auto">
                        <table className="table text-base">
                            <thead className="bg-main bg-opacity-90 text-base">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Class Name</th>
                                    <th>Instructor</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classes?.map((item, idx) => (
                                    <EnrolledClassRow
                                        item={item}
                                        idx={idx}
                                        key={item?._id}
                                    ></EnrolledClassRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-center text-6xl text-main opacity-50 mt-20">
                        No Class Enrolled
                    </h2>
                </>
            )}
        </div>
    );
};

export default MyEnrolledClass;
