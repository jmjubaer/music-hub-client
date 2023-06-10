import React from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";

const ClassRow = ({item,idx}) => {
    console.log(item);
    const {className,image,instructor,price} = item || {};
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>{instructor}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-info">Pay</button>
            </th>
            <th>
                <button className="btn btn-error text-white"><FaTrashAlt/></button>
            </th>
        </tr>
    );
};

export default ClassRow;
