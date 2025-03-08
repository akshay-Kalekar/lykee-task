import { CalendarDays, IndianRupee } from "lucide-react";

// components/TripCard.js
const TripCard = ({ trip }) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white hover:scale-105 transition-all'>
            <h2 className='text-xl font-semibold mb-2 '>{trip["trip-name"]}</h2>

            <div className='flex flex-wrap gap-2 my-4 '>
                {trip.amenities.slice(0,5).map((amenity, index) => (
                    <div
                        key={index}
                        className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs'
                    >
                        {amenity}
                    </div>
                ))}
                
            </div>
            <div className='flex justify-between text-xl font-bold text-gray-900 border-t-2 p-4'>
                <p className='flex justify-between items-center'>
                    {" "}
                    <IndianRupee /> {trip.price}{" "}
                </p>
                <p className='flex justify-between items-center gap-2'>
                    <CalendarDays /> {trip.duration}
                </p>
            </div>
        </div>
    );
};

export default TripCard;
