// pages/destination/[handle].js
"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TripCard from "./components/TripCard";
import { use } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
export default function Destination({ params }: any) {
    const { handle }:{handle:string} = use(params);
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        if (handle) {
            fetchTrips();
        }
    }, [handle]);
    console.log(handle);
    const fetchTrips = async () => {
        try {
            const response = await fetch(
                `https://json-data-1wm2.onrender.com/destination/${handle}`
            );
            const data = await response.json();
            setTrips(data.trips);
        } catch (error) {
            console.error("Error fetching trips:", error);
        }
    };

    return (
        <>
            <div className='flex flex-col gap-4 p-4  pt-20 justify-items-start items-center h-screen'>
                <h1 className="text-4xl">
                    {handle.charAt(0).toUpperCase() + handle.slice(1)}
                </h1>
                <h2>Top Trips to choose from . . . </h2>
                <div className='flex flex-wrap gap-10 justify-center items-center'>
                    {trips.map((trip, index) => (
                        <TripCard key={index} trip={trip} i={index} />
                    ))}
                </div>
            </div>
            <div className='sticky bottom-5 w-fit flex shadow-xl text-xs rounded-xl left-1/2 transform -translate-x-1/2 '>
                <Link
                    href={"/get-in-touch"}
                    className='bg-black group-hover:bg-gray-800 text-white font-bold py-2 px-4 flex justify-center items-center gap-2  transition-transform transform border-2 rounded-sm hover:scale-105  hover:bg-black/80'
                >
                    <Phone /> Talk To Our Expert
                </Link>
            </div>
        </>
    );
}
