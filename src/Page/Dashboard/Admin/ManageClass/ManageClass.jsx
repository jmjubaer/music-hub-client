import React from "react";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import Title from "../../../../Components/Title";
import Row from "./Row";

const ManageClass = () => {
    const { user, loading } = useAuthContext();
    const { axiosSecured } = useAxiosSecured();
    const { data: allclasses, refetch } = useQuery({
        queryKey: ["class", useQuery.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecured(`/allclasses?email=${user?.email}`);
            return res?.data;
        },
    });
    return (
        <div className="w-11/12 my-10">
            <Title heading={"Mange class"}></Title>
            <div className="overflow-auto h-[80vh] mt-16">
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
                        {allclasses?.map((item, idx) => (
                                    <Row
                                        item={item}
                                        idx={idx}
                                        key={item?._id}
                                    ></Row>
                                ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
