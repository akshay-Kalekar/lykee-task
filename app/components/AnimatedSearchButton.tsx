"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AnimatedSearchButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href='/customize'
            className='relative w-full max-w-md mx-auto overflow-hidden'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          flex items-center gap-4 px-4 py-2 rounded-full text-lg w-full
          transition-all duration-500 ease-in-out
          ${
              isHovered
                  ? "bg-black text-white flex-row-reverse"
                  : "bg-white text-gray-500"
          }
        `}
            >
                <div
                    className={`
          rounded-full p-2  bg-black text-white
          transition-all duration-500 ease-in-out
          ${isHovered ? " bg-white text-black" : ""}
        `}
                >
                    <Search
                        className='w-5 h-5 '
                        color={isHovered ? "black" : "white"}
                    />
                </div>

                <div className='relative w-full h-8 overflow-hidden'>
                    {/* Default text that slides out to the left */}
                    <div
                        className={`
            absolute w-full transition-all duration-500 ease-in-out
            ${
                isHovered
                    ? "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
            }
          `}
                    >
                        Explore all the countries, cities
                    </div>

                    {/* Hovered text that slides in from the right */}
                    <div
                        className={`
            absolute w-full transition-all duration-500 ease-in-out
            ${
                isHovered
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            }
          `}
                    >
                        Plan your trip now
                    </div>
                </div>
            </div>
        </Link>
    );
}
