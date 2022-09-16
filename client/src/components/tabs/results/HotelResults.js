import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HotelResults({ searchResults, showSaveBtn }) {

    async function saveData(hotel) {
        await axios.post("http://localhost:5000/api/hotels", hotel)
    }

    async function deleteData(flight) {
        console.log('test')
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
                            {showSaveBtn ? <button onClick={() => {
                                saveData(hotel)
                            }}>Save</button> : <button onClick={() => {
                                deleteData(hotel)
                            }}>Delete</button>}
                        </div>
                    </div>
                )
            })}
        </>
    )

}
