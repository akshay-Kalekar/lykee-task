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
            className='relative h-screen w-full '
            style={{
                backgroundImage: "url('/customize.avif')",
                backgroundSize: "cover",
            }}
        >
            <div
                className={`absolute top-40 left-135
          flex flex-col w-2/5 bg-white/80 shadow-xl rounded-xl
        `}
            >
                <div
                    className='flex  items-center gap-4 px-4 py-2 text-lg
         '
                >
                    <div
                        className={`
                        rounded-full p-2 bg-black text-white
          transition-all duration-500 ease-in-out
        `}
                    >
                        <Search className='w-5 h-5 ' />
                    </div>

                    <div className='relative w-3/5 h-8 overflow-hidden'>
                        <input
                            type='text'
                            placeholder='Pick your destination'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={`
                            absolute w-full transition-all duration-500 ease-in-out focus:outline-none
                            `}
                        />
                    </div>
                </div>
                <div className="px-4">
                    <ul className='h-fit flex flex-col gap-2  max-h-120 overflow-y-auto'>
                        {destinations
                            .filter((d) =>
                                d.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((dest) => (
                                <Link
                                    href={`/customize/${dest}`}
                                    key={dest}
                                    className='border-b-2 text-2xl font-bold mb-4'
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
