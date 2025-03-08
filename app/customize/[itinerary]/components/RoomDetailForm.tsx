import { CirclePlus, CircleMinus, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const NumberInput = ({ value = 0, onIncrease, onDecrease }) => {
    return (
        <div className='flex items-center gap-4'>
            <button
                onClick={onDecrease}
                disabled={value <= 0}
                className='p-2 border-2 rounded-full hover:bg-gray-200 transition'
            >
                <CircleMinus className='w-6 h-6' />
            </button>
            <span className='w-12 text-center text-xl'>{value}</span>
            <button
                onClick={onIncrease}
                className='p-2 border-2 rounded-full hover:bg-gray-200 transition'
            >
                <CirclePlus className='w-6 h-6' />
            </button>
        </div>
    );
};

const RoomDetailForm = ({
    open,
    setShowRoomConfigModal,
    setShowCongratulationModal,
    setItineraryAnswerData,
}) => {
    const [room, setRoom] = useState([{ adult: 1, child: 0 }]);

    useEffect(() => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: room,
        }));
    }, [room, setItineraryAnswerData]);

    const handleIncrease = (index, field) => {
        setRoom((prev) =>
            prev.map((r, i) =>
                i === index ? { ...r, [field]: r[field] + 1 } : r
            )
        );
    };

    const handleDecrease = (index, field) => {
        setRoom((prev) =>
            prev.map((r, i) =>
                i === index && r[field] > 0
                    ? { ...r, [field]: r[field] - 1 }
                    : r
            )
        );
    };

    const handleDelete = (index) => {
        setRoom((prev) => prev.filter((_, i) => i !== index));
    };

    if (!open) return null;
    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/50'>
            <div className='w-3/4 md:w-1/2 bg-white p-6 rounded-lg border-2 shadow-xl max-h-160 overflow-y-auto'>
                <h1 className='text-3xl py-4 font-extrabold'>
                    Choose Your Room Configuration
                </h1>
                {room.map((r, i) => (
                    <div
                        key={i}
                        className='mb-4 p-6 border rounded-lg relative bg-gray-100 shadow-sm'
                    >
                        <div className='flex justify-between items-center text-2xl font-extrabold text-gray-800 mb-4'>
                            <label htmlFor='room'>Room {i + 1}</label>
                            <X
                                onClick={() => handleDelete(i)}
                                className='cursor-pointer text-red-500 w-6 h-6'
                            />
                        </div>
                        <div className='flex justify-between items-center text-xl font-light mb-2'>
                            <label htmlFor='adult'>Adult</label>
                            <NumberInput
                                value={r.adult}
                                onIncrease={() => handleIncrease(i, "adult")}
                                onDecrease={() => handleDecrease(i, "adult")}
                            />
                        </div>
                        <div className='flex justify-between items-center text-xl font-light'>
                            <label htmlFor='child'>Child</label>
                            <NumberInput
                                value={r.child}
                                onIncrease={() => handleIncrease(i, "child")}
                                onDecrease={() => handleDecrease(i, "child")}
                            />
                        </div>
                    </div>
                ))}
                <div
                    className='flex justify-center items-center gap-4 bg-white/80 shadow-2xl border-2 hover:bg-white text-black p-3 rounded-lg cursor-pointer transition'
                    onClick={() => setRoom([...room, { adult: 1, child: 0 }])}
                >
                    <CirclePlus className='w-6 h-6' /> Add new Room
                </div>
                <div className='flex gap-4 mt-6'>
                    <button
                        className='w-full bg-gray-300 hover:bg-gray-400 text-black rounded-lg px-4 py-3 transition'
                        onClick={() => setShowRoomConfigModal(false)}
                    >
                        Go Back
                    </button>
                    <button
                        className='w-full bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-3 transition'
                        onClick={() => {
                            setShowRoomConfigModal(false);
                            setShowCongratulationModal(true);
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailForm;
