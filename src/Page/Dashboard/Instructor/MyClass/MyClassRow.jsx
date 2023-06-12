import React, { useState } from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

const MyClassRow = ({ item, idx,setOpen,setFeedback }) => {
    const { image, className, enrolled, status,feedback } = item || {};
    const handleShowFeedback = () => {
        setFeedback(feedback)
        setOpen(true)
    };
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                <td>
                    <img
                        className="w-16 h-16 object-cover"
                        src={image}
                        alt=""
                    />
                </td>
                <td>{className}</td>
                <td>{enrolled > 0 ? enrolled : "0"}</td>
                <td>
                    <div className="indicator">
                        {status === "denied" && (
                            <span
                                onClick={handleShowFeedback}
                                title="Feedback"
                                className="indicator-item -top-1 -right-2"
                            >
                                <FaInfoCircle className="text-xl text-red-600 cursor-pointer" />
                            </span>
                        )}
                        <p className="text-green-600">{status}</p>
                    </div>
                </td>
                <td>
                    <button className="btn btn-info">Update</button>
                </td>
            </tr>
        </>
    );
};

export default MyClassRow;
