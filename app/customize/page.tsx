"use client";
import { useState } from "react";

const destinations = [
    "Maldives",
    "Egypt",
    "Bali",
    "Dubai",
    "Japan",
    "Australia",
    "Thailand",
];

export default function Customize() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input
                type='text'
                placeholder='Pick your destination'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {destinations
                    .filter((d) =>
                        d.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((dest) => (
                        <li key={dest}>{dest}</li>
                    ))}
            </ul>
        </div>
    );
}
