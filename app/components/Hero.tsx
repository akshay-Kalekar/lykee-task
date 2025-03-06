import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = ({ banner }) => {
    console.log(banner);
    return (
        <>
            <div className='relative h-screen w-screen overflow-hidden top-0'>
                {banner.map((item, index) => (
                    <div className='absolute h-screen w-screen' key={index}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            width={1920} // Set the width of the image
                            height={1080} // Set the height of the image
                            layout='responsive' // Ensure the image scales responsively
                            objectFit='cover' // Adjust the image to cover the container
                            className='absolute inset-0 w-full h-full'
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center flex-col items-center  gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-6xl font-extrabold text-center text-white'>
                <div>REFRESH, RELAX AND RECOVER</div>
                <div className='flex text-lg  text-center rounded-4xl w-fit bg-white text-gray-500 px-4 py-2 gap-4 items-center'>
                    <div className='rounded-full bg-black p-2'>
                        {" "}
                        <Search />{" "}
                    </div>

                    <div>Explore all the countries, cities</div>
                </div>
            </div>
        </>
    );
};

export default Hero;
