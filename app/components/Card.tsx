import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
    return (
        <div
            className='relative h-96 w-96 border shadow-sm hover:border-black/50 hover:bg-black hover:text-white overflow-hidden text-center'
            onClick={() => redirect(`/destinations/${item.handle}`)}
        >
            <Image
                src={item.img}
                alt={item.alt}
                width={450} // Set the width of the image
                height={400} // Set the height of the image
                layout='responsive' // Ensure the image scales responsively
                objectFit='cover' // Adjust the image to cover the container
                className=' inset-0 w-full h-3/5'
            />
            <div className='absolute top-4 left-4 bg-white/80 rounded-4xl px-2 py-1 text-xs'>
                {" "}
                Explore
            </div>
            <div className='qbsolute bottom-4 left-4 text-3xl py-8'>
                {" "}
                {item.title}
            </div>
        </div>
    );
};

export default Card;
