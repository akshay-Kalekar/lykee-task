import Image from "next/image";
import React from "react";

const Card = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className=' h-92 w-80  border-2 shadow-sm flex flex-col justify-center items-center gap-16 hover:border-black/50 rounded-lg overflow-hidden text-center group'>
            <Image
                width={90}
                height={90}
                src={item.img}
                alt={item.alt}
                
                className='rounded-full'
            />
            <h1 className="text-2xl">{item.option}</h1>
        </div>
    );
};

export default Card;
