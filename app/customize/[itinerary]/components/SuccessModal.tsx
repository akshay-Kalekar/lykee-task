import Link from "next/link";
import React from "react";

const SuccessModal = ({ open, itineraryAnswerData }) => {
    console.log(itineraryAnswerData);
    if (!open) return null;
    return (
        <div className='absolute inset-0 z-50 flex justify-center items-center bg-black/50'>
            <div className='w-3/4 md:w-1/2 bg-white p-4 md:p-6 rounded-lg border-2 shadow-xl max-h-160 overflow-y-auto'>
                <h2 className='text-lg md:text-3xl font-bold mb-4'>
                    Thank You for Choosing LYKEE Travel
                </h2>
                <h1 className='text-2xl md:text-2xl py-4 font-extrabold text-black'>
                    Congratulations
                </h1>
                <div className='flex flex-col gap-6 text-sm md:text-lg text-gray-800'>
                    <label htmlFor='room' className='font-semibold'>
                        Your itinerary is generated as:
                    </label>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
                        <div className='flex justify-between items-center text-sm md:text-lg text-gray-800 mb-4'>
                            <label htmlFor='title'>
                                <span className='font-semibold'>
                                    Location:{" "}
                                </span>
                                {itineraryAnswerData.Location}
                            </label>
                        </div>

                        <div className='flex justify-between items-center text-sm md:text-lg text-gray-800 mb-4'>
                            <label htmlFor='duration'>
                                <span className='font-semibold'>
                                    Duration:{" "}
                                </span>
                                {itineraryAnswerData.Duration}
                            </label>
                        </div>

                        {itineraryAnswerData.Companion.map((r, i) => (
                            <div
                                className='flex text-left text-sm md:text-lg gap-4 text-gray-800 mb-4'
                                key={i}
                            >
                                <label htmlFor='room' className='font-semibold'>
                                    Room {i + 1} :
                                </label>
                                <div>
                                    <label htmlFor='adult'>
                                        Adult: {r.adult}
                                    </label>
                                    <span className='mx-4'> | </span>
                                    <label htmlFor='child'>
                                        Child: {r.child}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 mt-4 md:mt-6'>
                    <Link
                        href={`/get-in-touch`}
                        className='bg-black text-white text-sm md:text-lg font-medium rounded-lg px-4 py-3 mt-2 w-full text-center transition duration-300 hover:bg-gray-800'
                    >
                        Talk to Expert
                    </Link>
                    <Link
                        href={`/`}
                        className='bg-black text-white text-sm md:text-lg font-medium rounded-lg px-4 py-3 mt-2 w-full text-center transition duration-300 hover:bg-gray-800'
                    >
                        Go To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
