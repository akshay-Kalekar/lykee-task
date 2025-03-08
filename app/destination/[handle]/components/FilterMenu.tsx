import React, { useState } from "react";

const FilterMenu = () => {
    const [filters, setFilters] = useState({
        price: "",
        starRating: "",
        villaType: "",
        amenities: [],
    });

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        if (checked) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: [...prevFilters[name], value],
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: prevFilters[name].filter((item) => item !== value),
            }));
        }
    };

    return (
        <div>
            <h2>Filter by:</h2>

            <div>
                <h3>Price</h3>
                <label>
                    <input
                        type='checkbox'
                        name='price'
                        value='Below ₹ 100k'
                        onChange={handleCheckboxChange}
                    />
                    Below ₹ 100k
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='price'
                        value='Below ₹ 150k'
                        onChange={handleCheckboxChange}
                    />
                    Below ₹ 150k
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='price'
                        value='Below ₹ 200k'
                        onChange={handleCheckboxChange}
                    />
                    Below ₹ 200k
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='price'
                        value='Above ₹ 200k'
                        onChange={handleCheckboxChange}
                    />
                    Above ₹ 200k
                </label>
            </div>

            <div>
                <h3>Star Rating</h3>
                <label>
                    <input
                        type='checkbox'
                        name='starRating'
                        value='3 Star'
                        onChange={handleCheckboxChange}
                    />
                    3 Star
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='starRating'
                        value='4 Star'
                        onChange={handleCheckboxChange}
                    />
                    4 Star
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='starRating'
                        value='5 Star'
                        onChange={handleCheckboxChange}
                    />
                    5 Star
                </label>
            </div>

            <div>
                <h3>Villa Type</h3>
                <label>
                    <input
                        type='checkbox'
                        name='villaType'
                        value='Water Villa'
                        onChange={handleCheckboxChange}
                    />
                    Water Villa
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='villaType'
                        value='Beach Bungalow'
                        onChange={handleCheckboxChange}
                    />
                    Beach Bungalow
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='villaType'
                        value='Split Stay'
                        onChange={handleCheckboxChange}
                    />
                    Split Stay
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='villaType'
                        value='Family Villa'
                        onChange={handleCheckboxChange}
                    />
                    Family Villa
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='villaType'
                        value='Garden Villa'
                        onChange={handleCheckboxChange}
                    />
                    Garden Villa
                </label>
            </div>

            <div>
                <h3>Additional Preferences</h3>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='For the Honeymooners'
                        onChange={handleCheckboxChange}
                    />
                    For the Honeymooners
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='Best Overwater Villa'
                        onChange={handleCheckboxChange}
                    />
                    Best Overwater Villa
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='Kid Friendly Resorts'
                        onChange={handleCheckboxChange}
                    />
                    Kid Friendly Resorts
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='Great Indian Food'
                        onChange={handleCheckboxChange}
                    />
                    Great Indian Food
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='Seaplane only'
                        onChange={handleCheckboxChange}
                    />
                    Seaplane only
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='amenities'
                        value='Closest to Airport'
                        onChange={handleCheckboxChange}
                    />
                    Closest to Airport
                </label>
            </div>
        </div>
    );
};

export default FilterMenu;
