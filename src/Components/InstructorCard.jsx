import Aos from 'aos';
import React, { useEffect } from 'react';
// TODO: SET A button to navigate the instructor class page (optional)
const InstructorCard = ({instructors,classes}) => {
    const {image,name,email,_id} = instructors || {};
    const instructorsClasses = classes?.filter(c => c.email === email);
    useEffect(() =>{
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            // delay: 0,
        })
    },[])
    return (
        <div  data-aos="zoom-in" className="card border w-full max-w-[96%] mx-auto dark:text-slate-100 dark:bg-main dark:bg-opacity-50 rounded-none shadow-xl">
            <figure><img src={image} className='w-full h-80 object-cover' alt="Shoes" /></figure>
            <div className="p-5 text-center ">
                <h2 className="text-2xl font-bold text-sky-600">{name}</h2>
                <p className='font-bold'><span className='font-normal'>Email: </span> {email}</p>
                <div className="text-left mt-5">
                    <p className='text-lg font-bold my-2'>Total Class: {instructorsClasses?.length}</p>
                    <p className='text-lg font-bold'>Class Name:</p>
                    <div className='text-lg mt-3'>
                        {
                            instructorsClasses?.length > 0 ? 
                            instructorsClasses?.map((item,idx) => <li key={idx}>{item?.className}</li>) :
                            <p>No Class added</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;