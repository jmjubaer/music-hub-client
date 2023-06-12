import React from 'react';
import useClasses from '../../Hooks/useclasses';
import Cover from '../../Components/Cover';
import ClassCard from '../../Components/ClassCard';
import useAuthContext from '../../Hooks/UseAuthContext';

const Classes = () => {
    const {classes} = useClasses();
    const {theme} = useAuthContext()
    return (
        <div className={`mb-20 ${theme === "dark" && "dark"}`}>
            <Cover title={'All Class'}></Cover>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 jm_container my-8">
                {
                    classes?.map(item => <ClassCard 
                    key={item?._id}
                    data={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;