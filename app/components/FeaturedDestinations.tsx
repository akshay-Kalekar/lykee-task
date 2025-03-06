"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FeaturedDestinations() {
    const [destinations, setDestinations] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://json-data-1wm2.onrender.com/featured-destination")
            .then((res) => res.json())
            .then((data) => setDestinations(data.destination));
    }, []);

    return (
        <div>
            <h2>Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinations.map((destination) => (
                    <div key={destination.handle} className="border p-4 rounded-lg">
                        <img src={destination.img} alt={destination.title} className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-bold mt-2">{destination.title}</h3>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => router.push(`/destination/${destination.handle}`)}
                        >
                            Explore {destination.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
