import React, { useState } from "react";
import Results from "./SearchResults";

export default function Hotels({ currentPage, loading, setLoading, options, cityId, getDate }) {
    const [hotels, setHotels] = useState([])

    const [searchCity, setSearchCity] = useState("")
    const [adultNumb, setAdultNumb] = useState("")
    const [checkinDate, setCheckinDate] = useState("")
    const [checkoutDate, setCheckoutDate] = useState("")

    async function searchResults() {
        if (loading) return
        setLoading(true)
        const cityIdData = await cityId(searchCity)
        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-hotel?locationId=${cityIdData}&adults=${adultNumb}&rooms=1&checkin=${getDate(checkinDate)}&checkout=${getDate(checkoutDate)}&currency=USD`, options)
        const data = await response.json()
        console.log(convertResponse(data.hotels))
        setHotels(convertResponse(data.hotels))
        setLoading(false)
    }

    function convertResponse(data) {
        return data.map((hotel) => {
            return {
                name: hotel.name,
                stars: `Stars: ${hotel.stars}`,
                price: hotel.price
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
                        <span>Adults</span>
                        <input type={'number'} min='1' max='5' onChange={(e) => {
                            setAdultNumb(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Checkin Date</span>
                        <input type={'date'} onChange={(e) => {
                            setCheckinDate(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Checkout Date</span>
                        <input type={'date'} onChange={(e) => {
                            setCheckoutDate(e.target.value)
                        }}></input>
                    </div>
                </div>
                <button onClick={searchResults} disabled={loading}>{loading ? "loading..." : "SEARCH"}</button>
            </div>
            <div className="search-results-display">
            </div>
            <Results data={hotels} currentPage={currentPage} />
        </>
    )
}