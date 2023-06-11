import React from 'react';
import useInstructors from '../../Hooks/useInstructors';
import Cover from '../../Components/Cover';
import InstructorCard from '../../Components/InstructorCard';
import useClasses from '../../Hooks/useclasses';
import useAuthContext from '../../Hooks/UseAuthContext';

const Instructor = () => {
    const {instructors} = useInstructors();
    const {classes} = useClasses();
    const {theme} = useAuthContext();
    return (
        <div className={`${theme === "dark" && "dark"}`}>
            <Cover title={"All Instructor"}></Cover>
            <div className="grid grid-cols-3 gap-8 my-20 jm_container">
                {
                    instructors?.map(item => <InstructorCard
                    key={item?._id}
                    instructors={item}
                    classes={classes}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;