"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import './customize.module.css'

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
                backgroundImage: "url('/whitemap/dotted-world-map.webp')",
            }}
        >
            <div className='w-full max-w-md p-6 bg-white/90 shadow-xl rounded-xl'>
                <div className='flex items-center gap-4 px-4 py-2'>
                    <div className='rounded-full p-2 bg-black text-white transition-all duration-500 ease-in-out'>
                        <Search className='w-6 h-6' />
                    </div>

                    <div className='relative flex-1'>
                        <input
                            type='text'
                            placeholder='Pick your destination'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:border-black transition-all duration-500 ease-in-out'
                        />
                    </div>
                </div>
                <div className='px-4 mt-4'>
                    <ul className='h-fit flex flex-col gap-4 max-h-60 overflow-y-auto'>
                        {destinations
                            .filter((d) =>
                                d.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((dest) => (
                                <Link
                                    href={`/customize/${dest}`}
                                    key={dest}
                                    className='border-b-2 text-xl font-bold mb-2 hover:text-black/60 transition duration-300'
                                >
                                    {dest}
                                </Link>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
