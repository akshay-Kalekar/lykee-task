import React from "react";

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 px-4 py-2 flex justify-between items-center text-white bg-black/50 backdrop-blur-md'>
            {/* Logo */}
            <div className='w-56'>LYKKE.Travel</div>

            {/* Navigation Links */}
            <div className='flex gap-16'>
                <span>Home</span>
                <span>Destinations</span>
                <span>Contact Us</span>
            </div>

            {/* Buttons */}
            <div className='flex gap-2'>
                <button className='rounded-4xl border-2 px-6 py-2 hover:text-white hover:bg-black'>
                    Log-in
                </button>
                <button className='rounded-4xl border-2 px-6 py-2 hover:text-white hover:bg-black'>
                    Sign-up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
