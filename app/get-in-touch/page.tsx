"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <div className='h-screen w-full flex justify-center items-center '>
            <div className='flex flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden bg-black '>
                <div className='w-full md:w-1/2  text-white p-8'>
                    <h1 className='text-5xl font-bold'>Get In Touch</h1>
                    <p className='mt-4 text-xl'>
                        We are here to make your trip memorable
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full md:w-1/2 flex flex-col p-8 gap-4 bg-white text-black'
                >
                    <h2 className='text-3xl font-semibold'>
                        Consult with our experts
                    </h2>
                    <label className='text-xl'>Name</label>
                    <input
                        type='text'
                        placeholder='Name'
                        {...register("Name", { required: true, maxLength: 80 })}
                        className='p-2 text-xl border border-gray-300 rounded'
                    />
                    <label className='text-xl'>Contact Number</label>
                    <input
                        type='tel'
                        placeholder='Contact Number'
                        {...register("Contact Number", { required: true })}
                        className='p-2 text-xl border border-gray-300 rounded'
                    />
                    <label className='text-xl'>Email</label>
                    <input
                        type='email'
                        placeholder='Email'
                        {...register("Email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                        className='p-2 text-xl border border-gray-300 rounded'
                    />
                    <label className='text-xl'>Budget</label>
                    <select
                        {...register("Budget")}
                        className='p-2 text-xl border border-gray-300 rounded'
                    >
                        <option value='50,000 - 1 Lakh'>50,000 - 1 Lakh</option>
                        <option value='1 Lakh - 2 Lakhs'>
                            1 Lakh - 2 Lakhs
                        </option>
                        <option value='2 Lakhs - 3 Lakhs'>
                            2 Lakhs - 3 Lakhs
                        </option>
                        <option value='3 Lakhs+'>3 Lakhs+</option>
                    </select>

                    <input
                        type='submit'
                        className='mt-4 p-2 bg-black text-white text-xl rounded hover:bg-gray-800 transition-colors duration-300'
                    />
                </form>
            </div>
        </div>
    );
}
