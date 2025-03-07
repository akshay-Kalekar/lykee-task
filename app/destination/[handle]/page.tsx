"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import DisplayCard from "./components/DisplayCard";

export default function Destination({ params }) {
    const { handle } = use(params);
    const [trips, setTrips] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`https://json-data-1wm2.onrender.com/destination/${handle}`)
            .then((res) => res.json())
            .then((data) =>{console.log(data); setTrips(data.trips)});

    }, [handle]);
    console.log(trips);
    return (
        <div className="mt-[10vh]">
            <h2>Trips to {handle}</h2>
            {
                trips.map((items,index)=>{ 
                    return(
                        <DisplayCard key={index} item={items} />
                    )  
                })
            }
            <button
                onClick={() => router.push("/get-in-touch")}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            >
                Talk to an Expert
            </button>
        </div>
    );
}
