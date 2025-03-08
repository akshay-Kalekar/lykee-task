import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 px-4 py-2 flex justify-between text-xs md:text-lg items-center text-white bg-black/50 backdrop-blur-md'>
            {/* Logo */}
            <Link href={"/"} className=' md:w-56' passHref>
                LYKKE.Travel
            </Link>

            {/* Navigation Links */}
            <div className='hidden md:flex gap-16'>
                <Link href='/' passHref>
                    Home
                </Link>
                <Link href='/customize' passHref>
                    Plan Trip
                </Link>
                <Link href='/get-in-touch' passHref>
                    Contact Us
                </Link>
            </div>

            {/* Buttons */}
            <div className='flex gap-2'>
                <button className='rounded-4xl border-2 px-4 py-2 hover:text-white hover:bg-black'>
                    Sign-in
                </button>
                <button className='rounded-4xl border-2 px-4 py-2 hover:text-white hover:bg-black'>
                    Sign-up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
