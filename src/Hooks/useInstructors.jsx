import React from "react";
import useAuthContext from "./UseAuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructors = () => {
    const { loading } = useAuthContext();
    const {
        data: instructors,
        refetch,
        loading: instructorsLoading,
    } = useQuery({
        queryKey: ["instructor"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(
                "https://summer-camp-server-fawn.vercel.app/instructors"
            );
            return res.data;
        },
    });
    return { instructors, refetch, instructorsLoading };
};

export default useInstructors;
