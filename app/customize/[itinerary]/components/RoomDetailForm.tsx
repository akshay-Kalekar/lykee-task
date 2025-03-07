import { CirclePlus, CircleMinus, X } from "lucide-react";
import React, { useState } from "react";

const NumberInput = ({ value = 0, onIncrease, onDecrease }) => {
    return (
        <div className='flex items-center gap-2'>
            <button onClick={onDecrease} disabled={value <= 0}>
                <CircleMinus className='border-2 rounded-full' />
            </button>
            <span className='w-24'>{value}</span>
            <button onClick={onIncrease}>
                <CirclePlus />
            </button>
        </div>
    );
};

const RoomDetailForm = ({
    open,
    setShowRoomConfigModal,
    setShowCongratulationModal,
}) => {
    const [room, setRoom] = useState([{ adult: 1, child: 0 }]);

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
        <div className='absolute z-50 bg-blur w-full h-full flex justify-center items-center  border-2 '>
            <div className='w-2/7 bg-slate-50 p-4 rounded-lg border-2 max-h-160 overflow-y-scroll'>
                <h1 className='text-2xl py-4'>
                    Choose Your Room Configuration
                </h1>
                {room.map((r, i) => (
                    <div
                        key={i}
                        className='mb-4 px-8 pb-8 pt-4 border rounded-lg relative bg-white '
                    >
                        <div className='flex justify-between items-center text-2xl font-extrabold text-gray-800'>
                            <label htmlFor='room'>Room {i + 1}</label>
                            <X
                                onClick={() => handleDelete(i)}
                                className='cursor-pointer'
                            />
                        </div>
                        <div className='flex gap-4 text-2xl font-light justify-between'>
                            <label htmlFor='adult'>Adult</label>
                            <NumberInput
                                value={r.adult}
                                onIncrease={() => handleIncrease(i, "adult")}
                                onDecrease={() => handleDecrease(i, "adult")}
                            />
                        </div>
                        <div className='flex gap-4 text-2xl font-light justify-between'>
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
                    className='flex justify-center items-center gap-4 bg-white/80 shadow-2xl border-2 hover:bg-white text-black p-2 rounded-sm cursor-pointer'
                    onClick={() => setRoom([...room, { adult: 1, child: 0 }])}
                >
                    <CirclePlus /> Add new Room
                </div>
                <div className='flex gap-2 '>
                    <button className='bg-black/40 hover:bg-black text-white rounded-lg px-4 py-2 mt-4 w-full'>
                        Go Back
                    </button>
                    <button
                        className='bg-black/40 hover:bg-black text-white rounded-lg px-4 py-2 mt-4 w-full'
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
