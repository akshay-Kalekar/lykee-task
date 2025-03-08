import Image from "next/image";
import React from "react";

interface Card {
    item :{

        img: string;
        alt: string;
        option: string;
    }
    onClick: () => void
}
const Card = ({ item, onClick }: Card) => {
    return (
        <div onClick={onClick} className='h-50 w-36 md:h-50 md:w-72 lg:h-92 lg:w-60  border-2 shadow-sm flex flex-col justify-center items-center gap-8 md:gap-4 lg:gap-16 hover:border-black/50 rounded-lg overflow-hidden text-center group'>
            <Image
                width={90}
                height={90}
                src={item.img}
                alt={item.alt}
                
                className='rounded-full'
            />
            <h1 className="text-sm md:text-2xl">{item.option}</h1>
        </div>
    );
};

export default Card;
