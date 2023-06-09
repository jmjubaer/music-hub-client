import React from 'react';
import Title from '../../../Components/Title';
import useInstructors from '../../../Hooks/useInstructors';
import InstructorCard from '../../../Components/InstructorCard';

const PopularInstructor = () => {
    const {instructors} = useInstructors();
    const popular = instructors?.slice(0,6);
    return (
        <div className='jm_container my-28'>
            <Title heading={"Our Popular Instructor"} subHeading={"Meet our Instructor"}></Title>
            <div className="grid grid-cols-3 gap-8 mt-20">
                {
                    popular?.map(item => <InstructorCard
                    key={item?._id}
                    data={item}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;