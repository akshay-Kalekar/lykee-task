"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
    
    const router = useRouter();

    return (
        <div className='relative h-screen w-full overflow-hidden'>
            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                src='/travelcar.mp4'
                autoPlay
                loop
                muted
            />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20'>
                <div className='text-center text-white flex flex-col gap-4 items-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Welcome to Our Travel Site
                    </h1>

                    <button
                        className='mt-6 px-6 py-3 bg-[#F78CA2] text-white font-medium rounded-full shadow-lg hover:bg-[#F9DEC9] transition-colors flex justify-center w-fit gap-4'
                        onClick={() => router.push("/customize")}
                    >
                        Discover your next adventure <Search />
                    </button>
                </div>
            </div>
        </div>
    );
}
