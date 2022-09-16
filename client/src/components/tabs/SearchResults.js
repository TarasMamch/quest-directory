import React, { useEffect, useState } from "react";
import { useMatch } from 'react-router-dom'
import axios from "axios";
import FlightResults from "./results/FlightResults";
import HotelResults from "./results/HotelResults";
import RentalResults from "./results/RentalResults";

export default function Results({ data, currentPage }) {

    const isOnSavedTripsPage = useMatch("/saved-trips")

    async function saveData(data) {
        await axios.post(`http://localhost:5000/api/${currentPage}`, data)
        alert("Trip Saved")
    }

    const renderPage = () => {
        if (currentPage === 'Flights') {
            return (
                <FlightResults searchResults={data} showSaveBtn={true} saveData={saveData} />
            )
        } if (currentPage === 'Hotels') {
            return (
                <HotelResults searchResults={data} showSaveBtn={true} saveData={saveData} />
            )
        } if (currentPage === 'Rentals') {
            return (
                <RentalResults searchResults={data} showSaveBtn={true} saveData={saveData} />
            )
        }
    }

    return (
        <>
            {renderPage()}
        </>
    )
}