import React from 'react';
import useInstructors from '../../Hooks/useInstructors';
import Title from '../../Components/Title';

const Instructor = () => {
    const instructor = useInstructors();
    return (
        <div>
            <Title heading={"Our Popular Instructor"} subHeading={""}></Title>
            
        </div>
    );
};

export default Instructor;