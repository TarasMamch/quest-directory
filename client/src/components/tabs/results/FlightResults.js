import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FlightResults({ searchResults, setSearchResults, showSaveBtn, saveData }) {

    async function deleteData(flight) {
        await axios.delete(`http://localhost:5000/api/flights/${flight.id}`)
        setSearchResults(searchResults.filter(result => result !== flight))
    }

    return (
        <>
            {searchResults.map((flight, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h1>{flight.airline}</h1>
                        <div>
                            <h3>{flight.first_flight_time}</h3>
                            <h3>{flight.first_flight_destination}</h3>
                        </div>
                        <span>-</span>
                        <div>
                            <h3>{flight.second_flight_time}</h3>
                            <h3>{flight.second_flight_destination}</h3>
                        </div>
                        <h2>{flight.price}</h2>
                        <div className="button-container">
                            <a href={flight.link} target='_blank'>Link</a>
                            {showSaveBtn ? <button onClick={() => {
                                saveData(flight)
                            }}>Save</button> : <button onClick={() => {
                                deleteData(flight)
                            }}>Delete</button>}
                        </div>
                    </div>
                )
            })}
        </ >
    )
}