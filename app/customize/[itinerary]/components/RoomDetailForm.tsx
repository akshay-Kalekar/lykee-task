import { CirclePlus, CircleMinus, X } from "lucide-react";
import React, { useState, useEffect } from "react";
interface NumberInputProps {
    value: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
enum Fields {
    Adult = "adult",
    Child = "child",
}
const NumberInput = ({
    value = 0,
    onIncrease,
    onDecrease,
}: NumberInputProps) => {
    return (
        <div className='flex items-center md:gap-4'>
            <button
                onClick={onDecrease}
                disabled={value <= 0}
                className='p-2 border-2 rounded-full hover:bg-gray-200 transition'
            >
                <CircleMinus className='w-4 h-4 md:w-6 md:h-6' />
            </button>
            <span className='w-12 text-center text-sm md:text-xl'>{value}</span>
            <button
                onClick={onIncrease}
                className='p-2 border-2 rounded-full hover:bg-gray-200 transition'
            >
                <CirclePlus className='w-4 h-4 md:w-6 md:h-6' />
            </button>
        </div>
    );
};
interface Companion {
    adult: number;
    child: number;
}
interface ItineraryAnswerData {
    Location: string;
    Duration: string;
    Companion: Companion[];
}
interface RoomDetailFormProps {
    open: boolean;
    setShowRoomConfigModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowCongratulationModal: React.Dispatch<React.SetStateAction<boolean>>;
    itineraryAnswerData: ItineraryAnswerData;
    setItineraryAnswerData: React.Dispatch<
        React.SetStateAction<ItineraryAnswerData>
    >;
}
const RoomDetailForm = ({
    open,
    setShowRoomConfigModal,
    setShowCongratulationModal,
    itineraryAnswerData,
    setItineraryAnswerData,
}: RoomDetailFormProps) => {
    useEffect(() => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: itineraryAnswerData.Companion,
        }));
    }, [itineraryAnswerData.Companion, setItineraryAnswerData]);
    const handleIncrease = (index: number, field: Fields) => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: prev.Companion.map((r, i) =>
                i === index ? { ...r, [field]: r[field] + 1 } : r
            ),
        }));
    };
    const handleDecrease = (index: number, field: Fields) => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: prev.Companion.map((r, i) =>
                i === index && r[field] > 0
                    ? { ...r, [field]: r[field] - 1 }
                    : r
            ),
        }));
    };
    const handleDelete = (index: number) => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: prev.Companion.filter((_, i) => i !== index),
        }));
    };
    const handleFamilyConfig = () => {
        setItineraryAnswerData((prev) => ({
            ...prev,
            Companion: [{ adult: 2, child: 2 }],
        }));
    };
    if (!open) return null;
    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/50'>
            <div className='w-3/4 md:w-1/2 bg-white p-6 rounded-sm border-2 shadow-xl max-h-160 overflow-y-auto'>
                <h1 className='text-lg md:text-3xl py-4 font-extrabold'>
                    Choose Your Room Configuration
                </h1>
                {itineraryAnswerData.Companion.map((r, i) => (
                    <div
                        key={i}
                        className='mb-4 p-6 border rounded-sm relative bg-gray-100 shadow-sm'
                    >
                        <div className='flex justify-between items-center text-lg md:text-2xl font-extrabold text-gray-800 mb-4'>
                            <label htmlFor='room'>Room {i + 1}</label>
                            <X
                                onClick={() => handleDelete(i)}
                                className='cursor-pointer text-red-500 w-6 h-6'
                            />
                        </div>
                        <div className='flex justify-between items-center text-sm md:font-light mb-2'>
                            <label htmlFor='adult'>Adult</label>
                            <NumberInput
                                value={r.adult}
                                onIncrease={() =>
                                    handleIncrease(i, Fields.Adult)
                                }
                                onDecrease={() =>
                                    handleDecrease(i, Fields.Adult)
                                }
                            />
                        </div>
                        <div className='flex justify-between items-center text-sm md:font-light'>
                            <label htmlFor='child'>Child</label>
                            <NumberInput
                                value={r.child}
                                onIncrease={() =>
                                    handleIncrease(i, Fields.Child)
                                }
                                onDecrease={() =>
                                    handleDecrease(i, Fields.Child)
                                }
                            />
                        </div>
                    </div>
                ))}
                <div
                    className='flex justify-center items-center gap-4 bg-white/80 shadow-2xl border-2 hover:bg-white text-black p-3 rounded-sm cursor-pointer transition'
                    onClick={() =>
                        setItineraryAnswerData((prev) => ({
                            ...prev,
                            Companion: [
                                ...prev.Companion,
                                { adult: 1, child: 0 },
                            ],
                        }))
                    }
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
