import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-2/5 rounded-lg p-10 my-20 bg-[#d2d2d2]  shadow-xl bg-opacity-30">
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <input required className="jm_input" placeholder="Enter your Name" type="text" {...register("name")} />

                    <input required className="jm_input" placeholder="Enter your Email" type="email" {...register("email")} />

                    <div className="relative">
                        <input required className="jm_input" placeholder="Enter your Password" type={show ? "text" : "password"} {...register("password")}/>
                        <span className='absolute text-2xl bottom-6 right-5 text-[#fff] cursor-pointer' onClick={()=> setShow(!show)}>
                        {
                            show ? <FaEyeSlash /> : <FaEye/>
                        }
                            </span>
                    </div>

                    <div className="relative">
                        <input required className="jm_input" placeholder="Confirm Password" type={show ? "text" : "password"} {...register("confirm")} />
                    </div>
                    {/* TODO : change design */}
                    <input className="jm_input" type="file" {...register("image")}/>

                    <span className="text-[#f00]">{err}</span>
                    <input className="jm_btn rounded-3xl w-full" type="submit" value="Sign Up" />
                </form>
                
                <p className="my-5">Have an account ? <button className="underline text-accent" onClick={() => setCondition("login")}>Login Now.</button></p>
            </div>
        </div>
    );
};

export default Register;