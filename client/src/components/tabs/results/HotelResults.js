import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HotelResults({ searchResults, savedTrips }) {

    async function saveData(flight) {
        await axios.post("http://localhost:5000/api/hotels", flight)
    }

    return (
        <>
            {searchResults.map((hotel, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h3 className="hotel-name">{hotel.name}</h3>
                        <h3 className="hotel-stars">{hotel.stars}</h3>
                        <h3 className="hotel-price">{hotel.price}</h3>
                        <div className="button-container">
                            <button onClick={(e) => {
                                saveData(hotel)
                            }}>Save</button>
                        </div>
                    </div>
                )
            })}
        </>
    )

}
