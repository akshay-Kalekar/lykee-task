"use client";
import React, { useEffect, useState } from "react";
import { use } from "react";
import Card from "./components/Card";
import { Progress } from "@/components/ui/progress";
import RoomDetailForm from "./components/RoomDetailForm";
import SuccessModal from "./components/SuccessModal";

interface ItineraryProps {
    params: {
        itinerary: string;
    };
}
export default function Itinerary({ params }: any) {
    const { itinerary }: { itinerary: string } = use(params);
    const [progress, setProgress] = React.useState(0);
    const [showRoomConfigModal, setShowRoomConfigModal] = useState(false);
    const [showCongratulationModal, setShowCongratulationModal] =
        useState(false);
    const [itineraryAnswerData, setItineraryAnswerData] = useState({
        Location: itinerary,
        Duration: "",
        Companion: [{ adult: 1, child: 0 }],
    });
    useEffect(() => {
        async function fetchTrips() {
            const response = await fetch(
                `https://json-data-1wm2.onrender.com/destination/${params}`
            );
            const data = await response.json();
            setTripsAvailable(data.trips);
        }
    }, []);
    const [tripsAvailable, setTripsAvailable] = useState([]);
    const itineraryQuestionariData = [
        {
            Question: "What's the duration of your holiday?",
            Options: [
                {
                    img: "/days/6-9days.avif",
                    alt: "6-9 days",
                    option: "6-9 Days",
                },
                {
                    img: "/days/10-12days.avif",
                    alt: "10-12 days",
                    option: "10-12 Days",
                },
                {
                    img: "/days/13-15days.avif",
                    alt: "13-15 days",
                    option: "13-15 Days",
                },
                {
                    img: "/days/15-20days.avif",
                    alt: "15-20 days",
                    option: "15-20 Days",
                },
            ],
        },
        {
            Question: "Who is travelling with you?",
            Options: [
                {
                    img: "/companions/family.png",
                    alt: "Family",
                    option: "Family",
                },
                {
                    img: "/companions/friends.png",
                    alt: "Friends",
                    option: "Friends",
                },
                {
                    img: "/companions/solo.png",
                    alt: "Solo",
                    option: "Solo",
                },
                {
                    img: "/companions/couple.png",
                    alt: "Couple",
                    option: "Couple",
                },
            ],
        },
    ];
    const [currectQuestion, setCurrectQuestion] = useState(0);
    const handleCardClick = (index: number) => {
        if (
            itineraryQuestionariData[currectQuestion].Question ===
            "Who is travelling with you?"
        ) {
            if (
                itineraryQuestionariData[currectQuestion].Options[index]
                    .option === "Solo"
            ) {
                setItineraryAnswerData((prev) => ({
                    ...prev,
                    Companion: [{ adult: 1, child: 0 }],
                }));
                setShowCongratulationModal(true);
            }
            if (
                itineraryQuestionariData[currectQuestion].Options[index]
                    .option === "Couple"
            ) {
                setItineraryAnswerData((prev) => ({
                    ...prev,
                    Companion: [{ adult: 2, child: 0 }],
                }));
                setShowCongratulationModal(true);
            }
            if (
                itineraryQuestionariData[currectQuestion].Options[index]
                    .option === "Family"
            ) {
                //OpenModal fill number of room and adult an childern
                setItineraryAnswerData((prev) => ({
                    ...prev,
                    Companion: [{ adult: 2, child: 2 }],
                }));
                setShowRoomConfigModal(true);
            }
            if (
                itineraryQuestionariData[currectQuestion].Options[index]
                    .option === "Friends"
            ) {
                setItineraryAnswerData((prev) => ({
                    ...prev,
                    Companion: [{ adult: 4, child: 0 }],
                }));
                setShowRoomConfigModal(true);
            }
        }
        if (
            itineraryQuestionariData[currectQuestion].Question ===
            "What's the duration of your holiday?"
        ) {
            setItineraryAnswerData((prev) => ({
                ...prev,
                Duration:
                    itineraryQuestionariData[currectQuestion].Options[index]
                        .option,
            }));
        }

        if (currectQuestion < itineraryQuestionariData.length - 1) {
            setCurrectQuestion((prev) => prev + 1);
        }
        setProgress(
            ((currectQuestion + 1) / itineraryQuestionariData.length) * 100
        );
    };
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
                <h1>Let's Plan Your Holidays</h1>
                <RoomDetailForm
                    open={showRoomConfigModal}
                    setShowRoomConfigModal={setShowRoomConfigModal}
                    itineraryAnswerData={itineraryAnswerData}
                    setItineraryAnswerData={setItineraryAnswerData}
                    setShowCongratulationModal={setShowCongratulationModal}
                />
                <SuccessModal
                    open={showCongratulationModal}
                    itineraryAnswerData={itineraryAnswerData}
                />
                <Progress value={progress} className='w-[60%] mt-8' />
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-lg md:text-2xl py-8 text-center'>
                            {itineraryQuestionariData[currectQuestion].Question}
                        </h2>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {itineraryQuestionariData[
                                currectQuestion
                            ].Options.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-center'
                                >
                                                <Card
                                                    key={index}
                                                    item={item}
                                                    onClick={() =>
                                                        handleCardClick(
                                                           index
                                                        )
                                                    }
                                                />
                                           
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
}
