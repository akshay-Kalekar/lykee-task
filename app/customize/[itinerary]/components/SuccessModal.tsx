import { Link } from "lucide-react";
import React from "react";

const SuccessModal = ({ open, roomData,destination="egypt" }) => {
    console.log(roomData);
    if(!open) return null;
    return (
        <div className='absolute z-50 bg-blur w-full h-full flex justify-center items-center  border-2 '>
            <div className='w-2/7 bg-slate-50 p-4 rounded-lg border-2 max-h-160 overflow-y-scroll'>
                <h1 className='text-2xl py-4 font-extrabold'>
                    Congratulations
                </h1>
                <div className='flex flex-col  gap-4 justify-between  text-2xl  text-gray-800 text-left'>
                    <label htmlFor='room'>
                        Your itinerary is Configuration
                    </label>

                    {roomData.Duration && (
                        <div className='flex justify-between items-center text-2xl  text-gray-800'>
                            <label htmlFor='duration'>
                                <span className='font-bold'>Duration : </span>
                                {roomData.Duration}
                            </label>
                        </div>
                    )}
                    {roomData.Companion.map((r, i) => (
                        <div
                            className='flex flex-col justify-between text-left text-2xl  text-gray-800'
                            key={i}
                        >
                            <label htmlFor='room' className='font-bold'>
                                Room {i + 1}
                            </label>
                            <div className='flex gap-2  text-2xl  text-gray-800 pl-4'>
                                <label htmlFor='adult'>Adult: {r.Adults}</label>
                                <label htmlFor='child'>
                                    Child: {r.Children}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href= {`/destination/${destination}`}
                    className='bg-black/40 hover:bg-black text-white rounded-lg px-4 py-2 mt-4 w-full'
                    
                >
                    Plan out Activities
                </Link>
            </div>
        </div>
    );
};

export default SuccessModal;
