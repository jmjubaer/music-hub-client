import React from "react";

const EnrolledClassRow = ({item,idx}) => {
    const {className,image,instructor,price} = item || {};
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <img className="w-16 h-16" src={image} alt="Avatar Tailwind CSS Component" />
            </td>
            <td>{className}</td>
            <td>{instructor}</td>
            <td>${price}</td>
            <td className="text-lg font-bold text-green-600">Paid</td>
        </tr>
    );
};

export default EnrolledClassRow;
