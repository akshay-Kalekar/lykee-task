"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";

export default function Home() {
    const [banners, setBanners] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://json-data-1wm2.onrender.com/banners")
            .then((res) => res.json())
            .then((data) => setBanners(data.banners));

        fetch("https://json-data-1wm2.onrender.com/featured-destination")
            .then((res) => res.json())
            .then((data) => setDestinations(data.destination));
    }, []);

    return (
        <div>
            <Hero banner={banners} />
            {/* Popular Destinations */}
           
            <SubHero featured={destinations} />
           
        </div>
    );
}
