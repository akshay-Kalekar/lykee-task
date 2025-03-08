import React from "react";
import Card from "./Card";
interface Featured {
    img: string;
    alt: string;
    handle: string;
    title: string;
}
const SubHero = ({ featured }: { featured: Featured[] }) => {
    console.log(featured);
    return (
        <div className=' p-4 md:px-8 md:py-4'>
            <div className='flex flex-col md:flex-row justify-between items-center py-8 px-4 md:py-16 font-light'>
                <div className='text-2xl md:text-5xl  md:w-[20ch] font-bold md:font-light text-left'>
                    Choose the range of expertly crafted packages
                </div>
                <div className='md:text-2xl md:w-[32ch] text-left md:text-right'>
                    <p>
                        We're going to give you all the best travel websites
                        that specialize in getting you the best rates.
                    </p>
                    <p>
                        Explore and have fun alongside relying on the advisors
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap justify-evenly items-center gap-8'>
                {featured.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SubHero;
