"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const [banners, setBanners] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://json-data-1wm2.onrender.com/banners")
            .then((res) => res.json())
            .then((data) => setBanners(data.banners));

        fetch("https://json-data-1wm2.onrender.com/featured-destination")
            .then((res) => res.json())
            .then((data) => setDestinations(data.destination));
    }, []);

    return (
        <div>
            {/* Carousel Banner */}
            <div className='relative w-full h-80 overflow-hidden'>
                {banners.length > 0 && (
                    <Image
                        src={banners[0].img}
                        alt={banners[0].alt}
                        layout='fill'
                        objectFit='cover'
                        priority
                    />
                )}
                <input
                    type='text'
                    placeholder='Search destinations'
                    className='absolute inset-0 m-auto w-1/2 p-2 bg-white border rounded'
                    onClick={() => router.push("/customize")}
                />
            </div>

            {/* Popular Destinations */}
            <h2 className='text-xl font-bold mt-6'>Popular Destinations</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                {destinations.map((dest) => (
                    <div
                        key={dest.handle}
                        className='border rounded-lg overflow-hidden shadow-md'
                    >
                        <Image
                            src={dest.img}
                            alt={dest.title}
                            width={300}
                            height={200}
                            objectFit='cover'
                        />
                        <div className='p-2'>
                            <h3 className='text-lg font-semibold'>
                                {dest.title}
                            </h3>
                            <button
                                className='mt-2 p-2 bg-blue-500 text-white rounded'
                                onClick={() =>
                                    router.push(`/destination/${dest.handle}`)
                                }
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
