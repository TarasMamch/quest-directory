import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RentalResults({ searchResults, showSaveBtn }) {

    async function saveData(car) {
        await axios.post("http://localhost:5000/api/rentals", car)
    }

    async function deleteData(flight) {
        console.log('test')
    }

    return (
        <>
            {searchResults.map((car, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h1 className="rental-vndr">{car.vender}</h1>
                        <h3 className="car-name">{car.car_name}</h3>
                        <h3 className="rental-price">{car.price}</h3>
                        <div className="button-container">
                            {showSaveBtn ? <button onClick={() => {
                                saveData(car)
                            }}>Save</button> : <button onClick={() => {
                                deleteData(car)
                            }}>Delete</button>}
                        </div>
                    </div>
                )

            })}
        </>
    )
}