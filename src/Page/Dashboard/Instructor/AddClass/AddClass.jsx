import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../../../Components/Title';
import useAuthContext from '../../../../Hooks/UseAuthContext';
import useAxiosSecured from '../../../../Hooks/useAxiosSecured';
import Swal from 'sweetalert2';

const AddClass = () => {
    const {user} = useAuthContext();
    const {axiosSecured} = useAxiosSecured();
    const { register, handleSubmit,reset } = useForm();
    const handleAddClass = data => {
        const hostingURL =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`;
        const formData = new FormData();
        formData.append('image',data?.image[0])
        fetch(hostingURL,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(async(imgRes) => {
            if(imgRes.success){
                const newClass = {
                    className: data?.className,
                    image: imgRes?.data?.display_url,
                    instructor: data?.instructor,
                    email: data?.email,
                    status: "pending",
                    totalSeats: parseInt(data?.totalSeats),
                    price: parseInt(data?.price),
                }
                console.log(newClass);
               const res = await axiosSecured.post('addClass',newClass)
               if(res?.data?.insertedId){
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Class Added Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
               }
            }
        })
    };
    return (
        <div className='my-12'>
            <Title heading={"Add A Class"}></Title>
            <form onSubmit={handleSubmit(handleAddClass)} className='bg-main my-16 mx-5 p-10 rounded-xl' action="">
                <div className="w-full">
                    <input required className='jm_input_white' placeholder='Class Name' type="text" id='name' {...register("className")}/>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-8 mt-5">
                    <div className="w-full">
                        <label className='text-xl' htmlFor="ins">Name</label>
                        <input required value={user?.displayName} id='ins' readOnly className='jm_input_white cursor-not-allowed' type="text" {...register("instructor")}/>
                    </div>
                    <div className="w-full">
                    <label className='text-xl' htmlFor="email">Email</label>
                        <input required value={user?.email} readOnly className='cursor-not-allowed jm_input_white' type="email" id='email' {...register("email")}/>
                    </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-8 mt-5">
                    <div className="w-full">
                        <label htmlFor="seats" className='text-xl'>Total Seats</label>
                        <input required className='jm_input_white' placeholder='Total Seats' type="text" id='seats' {...register("totalSeats")}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="price" className='text-xl'>Price</label>
                        <input required className='jm_input_white' placeholder='Price' type="text" id='price' {...register("price")}/>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="image" className='text-xl'>Class Image</label>
                    <input required className='jm_input_white' type="file" id='image' {...register("image")}/>
                </div> 
                <input type="submit" className='btn w-1/2 mx-auto block mt-5 bg-opacity-70' value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;