"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Destination({ params }) {
    const { handle } = use(params);
    const [trips, setTrips] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`https://json-data-1wm2.onrender.com/destination/${handle}`)
            .then((res) => res.json())
            .then((data) => setTrips(data.trips));
    }, [handle]);

    return (
        <div>
            <h2>Trips to {handle}</h2>
            {trips.map((trip) => (
                <div
                    key={trip["trip-name"]}
                    className='border p-4 rounded-lg mb-4'
                >
                    <img
                        src={trip.image}
                        alt={trip["trip-name"]}
                        className='w-full h-48 object-cover rounded-lg'
                    />
                    <h3 className='text-xl font-bold mt-2'>
                        {trip["trip-name"]}
                    </h3>
                    <p>Price: ${trip.price}</p>
                    <p>Duration: {trip.duration}</p>
                    <h4 className='mt-2 font-semibold'>Amenities:</h4>
                    <ul className='list-disc list-inside'>
                        {trip.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <button
                onClick={() => router.push("/get-in-touch")}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            >
                Talk to an Expert
            </button>
        </div>
    );
}
