import React, { useEffect, useState } from "react";
import FlightResults from "./results/FlightResults";
import HotelResults from "./results/HotelResults";
import RentalResults from "./results/RentalResults";

export default function Results({ flights, hotels, rentals, currentPage }) {

    const renderPage = () => {
        if (currentPage === 'Flights') {
            return (
                <FlightResults searchResults={flights} />
            )
        } if (currentPage === 'Hotels') {
            return (
                <HotelResults searchResults={hotels} />
            )
        } if (currentPage === 'Rentals') {
            return (
                <RentalResults searchResults={rentals} />
            )
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}