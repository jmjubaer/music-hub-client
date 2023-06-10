import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecured from "../../../../Hooks/useAxiosSecured";
import useAuthContext from "../../../../Hooks/UseAuthContext";

const MySelectedClass = () => {
    const {loading} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const {data: classes} = useQuery({
        queryKey: ['selected'],
        enabled: !loading,
        queryFn: async() => {
            axiosSecured('/selectedclass')
            .then(res => {
                console.log(res?.data);
                return res.data;
            })
        }
    })
    console.log(classes);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-main">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th>#</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Hart Hagerty
                                        </div>
                                        <div className="text-sm opacity-50">
                                            United States
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Desktop Support Technician
                                </span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;
