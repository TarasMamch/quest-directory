import React, { useEffect, useState } from "react";
import FlightResults from "./results/FlightResults";
import HotelResults from "./results/HotelResults";
import RentalResults from "./results/RentalResults";

export default function Results({ flights, hotels, rentals, currentPage }) {

    const getTime = (param) => {
        const time = new Date(param)
        return `${time.getHours()} : ${time.getMinutes()}`
    }

    const renderPage = () => {
        if (currentPage === 'Flights') {
            return (
                <FlightResults data={flights} getTime={getTime} />
            )
        } if (currentPage === 'Hotels') {
            return (
                <HotelResults data={hotels} getTime={getTime} />
            )
        } if (currentPage === 'Rentals') {
            return (
                <RentalResults data={rentals} getTime={getTime} />
            )
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}