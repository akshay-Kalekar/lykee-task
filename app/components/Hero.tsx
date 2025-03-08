import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedSearchButton from "./AnimatedSearchButton";

interface Banner {
    img: string;
    alt: string;
}
const Hero = ({banner}:{ banner: Banner[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banner.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, [banner.length]);

    return (
        <>
            <div className='h-screen relative w-full overflow-hidden'>
                {banner.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={item.img}
                            alt={item.alt}
                            layout='fill'
                            objectFit='cover'
                            className='absolute inset-0 w-full h-full'
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center flex-col items-center gap-4 md:gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-2xl md:text-6xl font-extrabold text-center text-white w-4/5'>
                <div>REFRESH, RELAX AND RECOVER</div>
                <AnimatedSearchButton />
            </div>
        </>
    );
};

export default Hero;
