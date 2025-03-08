import { CalendarDays, IndianRupee } from "lucide-react";

// components/TripCard.js
interface TripCardProps {
    trip: {
        "trip-name": string;
        price: number;
        duration: number;
        amenities: string[];
    };
    i: number;
}
const TripCard = ({ trip, i }: TripCardProps) => {
    return (
        <div className='h-60 w-2xs md:h-60 md:w-sm border-2 overflow-hidden shadow-lg p-4 md:p-6 bg-white hover:scale-105 transition-all'>
            <div className='flex justify-between w-full'>
                <h2 className='text-lg md:text-xl font-semibold mb-2 overflow-clip whitespace-nowrap  text-ellipsis'>
                    {trip["trip-name"]}
                </h2>
                {i < 1 ? (
                    <div className='rounded-4xl px-2 border-2 border-black w-fit text-xs h-6 flex items-center  justify-center'>
                        Popular
                    </div>
                ) : (
                    <div className='h-6'></div>
                )}
            </div>
            <div className='h-24'>
                <div className='flex flex-wrap gap-2  '>
                    {trip.amenities.slice(0, 5).map((amenity, index) => (
                        <div
                            key={index}
                            className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs h-fit'
                        >
                            {amenity}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between text-xl font-bold text-gray-900 border-t-2 p-4'>
                <p className='flex justify-between items-center'>
                    <IndianRupee /> {trip.price}
                </p>
                <p className='flex justify-between items-center gap-2'>
                    <CalendarDays /> {trip.duration}
                </p>
            </div>
        </div>
    );
};

export default TripCard;
