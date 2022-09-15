import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RentalResults({ searchResults, savedTrips }) {

    async function saveData(car) {
        await axios.post("http://localhost:5000/api/rentals", car)
    }

    return (
        <>
            {searchResults.map((car, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h1 className="rental-vndr">{car.vndr}</h1>
                        <h3 className="car-name">{car.car_name}</h3>
                        <h3 className="rental-price">${car.price}</h3>
                        <div className="button-container">
                            <button onClick={(e) => {
                                saveData(car)
                            }}>Save</button>
                        </div>
                    </div>
                )

            })}
        </>
    )
}