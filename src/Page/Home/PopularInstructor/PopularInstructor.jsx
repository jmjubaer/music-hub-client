import React from 'react';
import Title from '../../../Components/Title';
import useInstructors from '../../../Hooks/useInstructors';
import InstructorCard from '../../../Components/InstructorCard';
import useClasses from '../../../Hooks/useclasses';

const PopularInstructor = () => {
    const {instructors} = useInstructors();
    const popular = instructors?.slice(0,6);
    const {classes} = useClasses();
    return (
        <section className='jm_container my-28'>
            <Title heading={"Our Popular Instructor"} subHeading={"Meet our Instructor"}></Title>
            <div className="grid grid-cols-3 gap-8 mt-20">
                {
                    popular?.map(item => <InstructorCard
                    key={item?._id}
                    instructors={item}
                    classes={classes}
                    ></InstructorCard>)
                }
            </div>
        </section>
    );
};

export default PopularInstructor;