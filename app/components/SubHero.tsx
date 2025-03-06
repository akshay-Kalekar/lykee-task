import React from "react";
import Card from "./Card";

const SubHero = ({ featured }) => {
    console.log(featured);
    return (
        //info
        <div className=' p-8'>
            <div className='flex justify-between items-center py-16 font-light'>
                <div className='text-6xl  w-[20ch] text-left'>
                    Choose the range of expertly crafted packages{" "}
                </div>
                <div className='text-3xl w-[32ch] text-right'>
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
