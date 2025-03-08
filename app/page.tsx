"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
    const [banners, setBanners] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        Promise.all([
            fetch("https://json-data-1wm2.onrender.com/banners")
                .then((res) => res.json())
                .then((data) => setBanners(data.banners)),
            fetch("https://json-data-1wm2.onrender.com/featured-destination")
                .then((res) => res.json())
                .then((data) => setDestinations(data.destination)),
        ]).then(() =>setLoading(false));
    }, []);

    return (
        <div>
            {loading ? (
                <div className='fixed inset-0 flex justify-center items-center bg-white z-50 p-40'>
                    <DotLottieReact
                        src='https://lottie.host/d58b1c56-23f2-4d4e-bc46-39355fffc877/DSvaleP70d.lottie'
                        loop
                        autoplay
                    />
                </div>
            ) : (
                <>
                    <Hero banner={banners} />
                    <SubHero featured={destinations} />
                </>
            )}
        </div>
    );
}
