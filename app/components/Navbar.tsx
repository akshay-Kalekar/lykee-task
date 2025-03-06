"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-[#3D0C11] text-white shadow-2xl'>
            <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
                {/* Mobile menu trigger */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='md:hidden text-white hover:bg-[#F78CA2]'
                        >
                            <Menu className='h-6 w-6' />
                            <span className='sr-only'>Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side='left'
                        className='bg-[#3D0C11] text-white border-r border-[#F78CA2]'
                    >
                        <div className='flex flex-col gap-6 pt-10'>
                            <Link
                                href='#'
                                className='text-lg font-medium hover:text-[#F9DEC9] transition-colors'
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href='#'
                                className='text-lg font-medium hover:text-[#F9DEC9] transition-colors'
                                onClick={() => setIsOpen(false)}
                            >
                                Destinations
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Left navigation - hidden on mobile */}
                <nav className='hidden md:flex items-center gap-6'>
                    <Link
                        href='#'
                        className='text-sm font-medium hover:text-[#F9DEC9] transition-colors'
                    >
                        Home
                    </Link>
                    <Link
                        href='#'
                        className='text-sm font-medium hover:text-[#F9DEC9] transition-colors'
                    >
                        Destinations
                    </Link>
                </nav>

                {/* Centered logo */}
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <Link href='/' className='flex items-center justify-center'>
                        <span className='text-xl font-bold tracking-tighter bg-gradient-to-r text-white bg-clip-text'>
                            LYKEE.travel
                        </span>
                    </Link>
                </div>

                {/* Book Now button */}
                <Button className='bg-[#D80032] text-[#3D0C11] hover:bg-[#F9DEC9] hover:text-[#3D0C11] font-medium'>
                    Book Now
                </Button>
            </div>
        </header>
    );
}
