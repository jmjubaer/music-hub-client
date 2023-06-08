import React from 'react';
import useClasses from '../../Hooks/useclasses';
import Cover from '../../Components/Cover';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {
    const {classes} = useClasses();
    return (
        <div className='mb-20'>
            <Cover title={'All Class'}></Cover>
            <div className="grid grid-cols-3 gap-8 jm_container mt-8">
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