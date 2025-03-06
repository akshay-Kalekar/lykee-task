"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        email: "",
        budget: "",
    });
    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div>
            <h2>Contact Us</h2>
            <input name='name' placeholder='Name' onChange={handleChange} />
            <input
                name='contact'
                placeholder='Contact Number'
                onChange={handleChange}
            />
            <input name='email' placeholder='Email' onChange={handleChange} />
            <select name='budget' onChange={handleChange}>
                <option>50,000 - 1 Lakh</option>
                <option>1 Lakh - 2 Lakhs</option>
                <option>2 Lakhs - 3 Lakhs</option>
                <option>3 Lakhs+</option>
            </select>
            <button>Submit</button>
        </div>
    );
}
