import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import Cover from "../../../../Components/Cover";
import Title from "../../../../Components/Title";
import ClassRow from "./ClassRow";

const MySelectedClass = () => {
    const {loading} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const {data: classes,refetch} = useQuery({
        queryKey: ['selected'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecured('/selectedclass')
            return res?.data
        }
    })
    console.log(classes);
    return (
        <div className="w-11/12">
            <div className="mb-14">
                <Title heading={"My Selected Class"}></Title>
            </div>
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
                        {
                            classes?.map((item,idx) => <ClassRow 
                                item={item}
                                idx={idx}
                                key={item?._id}></ClassRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;
