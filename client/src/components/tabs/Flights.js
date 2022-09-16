import React, { useState } from "react";
import Results from "./SearchResults";

export default function Flights({ currentPage, loading, setLoading, options, getDate }) {
    const [flights, setFlights] = useState([])

    const [departAirport, setDepartAirport] = useState("")
    const [arriveAirport, setArriveAirport] = useState("")
    const [departDate, setDepartDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [adultNum, setAdultNum] = useState("")

    const getTime = (param) => {
        const time = new Date(param)
        return `${time.getHours()} : ${time.getMinutes()}`
    }

    async function searchResults() {
        if (loading) return
        setLoading(true)
        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-extended?origin=${departAirport}&destination=${arriveAirport}&departureDate=${getDate(departDate)}&returnDate=${getDate(returnDate)}&adults=${adultNum}&currency=USD`, options)
        const data = await response.json()
        setFlights(convertResponse(data.itineraries.results))
        setLoading(false)
    }

    function convertResponse(data) {
        return data.map((flight) => {
            return {
                airline: flight.legs[0].carriers.marketing[0].name,
                first_flight_time: `${getTime(flight.legs[0].departure)} - ${getTime(flight.legs[0].arrival)}`,
                first_flight_destination: `${flight.legs[0].origin.displayCode} to ${flight.legs[0].destination.displayCode}`,
                second_flight_time: `${getTime(flight.legs[1].departure)} - ${getTime(flight.legs[1].arrival)}`,
                second_flight_destination: `${flight.legs[1].origin.displayCode} to ${flight.legs[1].destination.displayCode}`,
                price: `$${flight.pricing_options[0].price.amount}`,
                link: flight.deeplink
            }
        })
    }

    return (
        <>
            <div className="search-containers">
                <div className="indented-search-container">
                    <div className="input-container">
                        <span>Departing Airport</span>
                        <input placeholder="(AITA code)" onChange={(e) => {
                            setDepartAirport(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Arriving Airport</span>
                        <input placeholder="(AITA code)" onChange={(e) => {
                            setArriveAirport(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Depart Date</span>
                        <input type={'date'} onChange={(e) => {
                            setDepartDate(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Return Date</span>
                        <input type={'date'} onChange={(e) => {
                            setReturnDate(e.target.value)
                        }}></input>
                    </div>
                    <div className="input-container">
                        <span>Adults</span>
                        <input type={'number'} min='1' max='2' onChange={(e) => {
                            setAdultNum(e.target.value)
                        }}></input>
                    </div>
                </div>
                <button onClick={searchResults} disabled={loading}>{loading ? "loading..." : "SEARCH"}</button>
            </div >
            <Results data={flights} currentPage={currentPage} />
        </>
    )
}