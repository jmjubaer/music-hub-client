import React from 'react';
import Title from '../../../Components/Title';
import useInstructors from '../../../Hooks/useInstructors';
import InstructorCard from '../../../Components/InstructorCard';
import useClasses from '../../../Hooks/useclasses';
import { Link } from 'react-router-dom';

const PopularInstructor = () => {
    const {instructors} = useInstructors();
    const popular = instructors?.slice(0,6);
    const {classes} = useClasses();
    return (
        <section className='jm_container my-28'>
            <Title heading={"Our Popular Instructor"} subHeading={"Meet our Instructor"}></Title>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {
                    popular?.map(item => <InstructorCard
                    key={item?._id}
                    instructors={item}
                    classes={classes}
                    ></InstructorCard>)
                }
            </div>
           <Link to={"/instructors"} className='block mx-auto w-fit mt-8'><button className='jm_btn rounded-sm '>See all Instructor</button></Link>
        </section>
    );
};

export default PopularInstructor;