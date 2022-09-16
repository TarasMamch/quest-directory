import React, { useState } from "react";
import Results from "./SearchResults";

export default function Rentals({ currentPage, loading, setLoading, options, cityId, getDate }) {
    const [rentals, setRentals] = useState([])

    const [searchCity, setSearchCity] = useState("")
    const [pickUpDate, setPickUpDate] = useState("")
    const [dropOffDate, setDropOffDate] = useState("")

    async function searchResults() {
        if (loading) return
        setLoading(true)
        const cityIdData = await cityId(searchCity)
        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=${cityIdData}&pickupDate=${getDate(pickUpDate)}&pickupTime=10%3A00&returnDate=${getDate(dropOffDate)}&returnTime=10%3A00&currency=USD`, options)
        const data = await response.json()
        console.log(convertResponse(data.quotes))
        setRentals(convertResponse(data.quotes))
        setLoading(false)
    }

    function convertResponse(data) {
        return data.map((car) => {
            return {
                vender: car.vndr,
                name: car.car_name,
                price: `$${car.price}`
            }
        })
    }

    return (
        <>
            <div className="search-containers">
                <div className="indented-search-container">
                    <div className="input-container">
                        <span>City</span>
                        <input placeholder="City" onChange={(e) => {
                            setSearchCity(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Pick-up Date</span>
                        <input type={'date'} onChange={(e) => {
                            setPickUpDate(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Drop-off Date</span>
                        <input type={'date'} onChange={(e) => {
                            setDropOffDate(e.target.value)
                        }}></input>
                    </div>
                </div>
                <button onClick={searchResults} disabled={loading}>{loading ? "loading..." : "SEARCH"}</button>
            </div>
            <Results data={rentals} currentPage={currentPage} />
        </>
    )
}