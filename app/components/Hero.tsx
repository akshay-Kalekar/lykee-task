import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import AnimatedSearchButton from "./AnimatedSearchButton";

const Hero = ({ banner }) => {
    console.log(banner);
    return (
        <>
            <div className='relative h-screen w-full overflow-hidden top-0'>
                {banner.map((item, index) => (
                    <div className='absolute h-screen w-screen' key={index}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            width={1920} // Set the width of the image
                            height={1080} // Set the height of the image
                            layout='responsive' // Ensure the image scales responsively
                            objectFit='cover' // Adjust the image to cover the container
                            className='absolute inset-0 w-full h-full overflow-hidden'
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center flex-col items-center gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-6xl font-extrabold text-center text-white '>
                <div>REFRESH, RELAX AND RECOVER</div>
                {/* <div className='transition-all flex hover:flex-row-reverse hover:bg-black duration-500 text-lg rounded-4xl w-full bg-white text-gray-500 px-4 py-2 gap-4 items-center group relative '>
                    <div className='rounded-full bg-black p-2 transition-transform duration-500 group-hover:rotate-180'>
                        <Search />
                    </div>

                    <div className='transition-opacity duration-500 absolute left-1/2 -translate-x-1/2 opacity-100 group-hover:opacity-0 w-full'>
                        Explore all the countries, cities
                    </div>
                    <div className='transition-opacity duration-500 absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white'>
                        Plan your trip now
                    </div>
                </div> */}
                <AnimatedSearchButton/>
            </div>
        </>
    );
};

export default Hero;
