import React from "react";

const Navbar = () => {
    return (
        <div className='sticky absoulte z-10 top-0 h-2/10 px-4 py-2 flex justify-between items-center text-white bg-black/50'>
            {/* logo */}
            <div className=''> LYKKE.Travel </div>
            <div className='flex gap-16'>
                <span>Home</span>
                <span>Destinations</span>
                <span> Contact Us</span>
            </div>
            <div className='flex gap-2'>
                <button className='rounded-4xl border-2 px-6 py-2 hover:text-white hover:bg-black'>
                    {" "}
                    Log-in
                </button>
                <button className='rounded-4xl border-2 px-6 py-2 hover:text-white hover:bg-black'>
                    {" "}
                    Sign-up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
