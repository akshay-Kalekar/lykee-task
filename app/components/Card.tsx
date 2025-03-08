import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Item {
    img: string;
    alt: string;
    handle: string;
    title: string;
}
const Card = ({
    item,
}: {
    item: Item;
}) => {
    return (
        <Link
            className='relative h-96 w-96 border shadow-sm hover:border-black/50 hover:bg-black hover:text-white overflow-hidden text-center group'
            href={`/destination/${item.handle}`}
        >
            <Image
                src={item.img}
                alt={item.alt || "Card Image"}
                layout='fill' // Ensure it fills the parent container
                objectFit='cover' // Cover the div without stretching
                className='absolute inset-0'
            />

            {/* Title Overlay - Appears on Hover */}
            <div className='relative z-10 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='flex w-full h-full justify-center items-center bg-white/70'>
                    <div className='text-4xl text-black'> Explore</div>
                </div>
            </div>

            {/* Explore Button - Disappears on Hover */}
            <div className='absolute top-4 left-4 z-10 bg-white/80 hover:bg-black/80 hover:text-white rounded-4xl px-2 py-1 text-xs opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                {item.title}
            </div>
        </Link>
    );
};

export default Card;
