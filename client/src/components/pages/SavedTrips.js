import React, { useEffect, useState } from "react"
import axios from "axios";
import NavTabs from '../NavTabs'
import FlightResults from "../tabs/results/FlightResults";
import HotelResults from "../tabs/results/HotelResults";
import RentalResults from "../tabs/results/RentalResults";

export default function SavedTrips({ loginName, userId }) {
    const [page, setPage] = useState("Flights")

    const [flights, setFlights] = useState([])
    const [hotels, setHotels] = useState([])
    const [rentals, setRentals] = useState([])

    useEffect(() => { fetchData() }, [])

    async function fetchData() {
        const { data } = await axios.get(`http://localhost:5000/api/users/${userId}`)
        setFlights(data.Flights)
        setHotels(data.Hotels)
        setRentals(data.Rentals)
    }

    function pageTab() {
        if (page === "Flights") {
            return <FlightResults searchResults={flights} setSearchResults={setFlights} />
        } if (page === "Hotels") {
            return <HotelResults searchResults={hotels} setSearchResults={setHotels} />
        } if (page === "Rentals") {
            return <RentalResults searchResults={rentals} setSearchResults={setRentals} />
        }
    }

    return (
        <div className='main-page-container'>
            <h1>Welcome {loginName}</h1>
            <h3>You can see all your saved trips here and delete them as well</h3>
            <NavTabs setCurrentPage={setPage} />
            {pageTab()}
        </div>
    )
}