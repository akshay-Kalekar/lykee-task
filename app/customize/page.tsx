"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const destinations = [
    "Maldives",
    "Egypt",
    "Bali",
    "Dubai",
    "Japan",
    "Australia",
    "Thailand",
];

export default function Customize() {
    const [search, setSearch] = useState("");

    return (
        <div
            className='h-screen w-full flex justify-center items-center bg-cover bg-center'
            style={{
                backgroundImage: "url('/whitemap/whitemap.jpg')",
                backgroundSize: "cover",
            }}
        >
            <div className='h-1/2 '>
                <div className='md:min-w-1/2  md:max-w-lg md:p-6 bg-white/90 shadow-xl rounded-xl border-2'>
                    <div className='flex items-center gap-4 px-4 py-2 '>
                        <div className='rounded-full p-2 bg-black text-white  transition-all duration-500 ease-in-out'>
                            <Search className='w-4 h-4 md:w-6 md:h-6' />
                        </div>

                        <div className='relative flex-1'>
                            <input
                                type='text'
                                placeholder='Pick your destination'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='w-full px-4 py-2 text-sm md:text-lg border rounded-lg focus:outline-none focus:border-black transition-all duration-500 ease-in-out'
                            />
                        </div>
                    </div>
                    <div className='px-4'>
                        <ul className='h-fit flex flex-col gap-4 max-h-80 md:max-h-60 overflow-y-auto'>
                            {destinations
                                .filter((d) =>d.toLowerCase().includes(search.toLowerCase()))
                                .map((dest) => (
                                    <Link
                                        href={`/customize/${dest}`}
                                        key={dest}
                                        className='border-b-2 text-sm md:text-xl font-bold mb-2 hover:text-black/60 transition duration-300'
                                    >
                                        {dest}
                                    </Link>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
