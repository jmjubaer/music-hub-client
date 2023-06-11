import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import useAuthContext from "../../../../Hooks/UseAuthContext";
import Title from "../../../../Components/Title";
import MyClassRow from "./MyClassRow";

const MyClass = () => {
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
    console.log(myClasses);
    return (
        <div className="mx-5">
            <div className="mb-14">
                <Title heading={"My Enrolled Class"}></Title>
            </div>
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
