import React, { useState } from "react";
import Results from "./SearchResults";

export default function Flights() {
    const [flights, setFlights] = useState([])

    async function searchResults() {
        console.log('searching...')
        const departAirport = document.querySelector('#departAirport').value
        const arriveAirport = document.querySelector('#arriveAirport').value
        const depart = new Date(document.querySelector('#departDate').value)
        const departDate = `${depart.getFullYear()}-${("0" + (depart.getMonth() + 1)).slice(-2)}-${("0" + depart.getDate()).slice(-2)}`
        const returnD = new Date(document.querySelector('#returnDate').value)
        const returnDate = `${returnD.getFullYear()}-${("0" + (returnD.getMonth() + 1)).slice(-2)}-${("0" + returnD.getDate()).slice(-2)}`
        const adultNum = document.querySelector('#adultNum').value

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9542fa2d8msh67a0d44db6352b1p112cd6jsn3123864a8840',
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        }

        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-extended?origin=${departAirport}&destination=${arriveAirport}&departureDate=${departDate}&returnDate=${returnDate}&adults=${adultNum}&currency=USD`, options)
        const data = await response.json()
        console.log(data.itineraries.results)
        setFlights(data.itineraries.results)
    }

    return (
        <div>
            <div className="search-containers">
                <div className="indented-search-container">
                    <div className="input-container">
                        <span>Departing Airport</span>
                        <input placeholder="(AITA code)" id="departAirport"></input>
                    </div>
                    <div className="input-container">
                        <span>Arriving Airport</span>
                        <input placeholder="(AITA code)" id="arriveAirport"></input>
                    </div>
                    <div className="input-container">
                        <span>Depart Date</span>
                        <input type={'date'} id='departDate'></input>
                    </div>
                    <div className="input-container">
                        <span>Return Date</span>
                        <input type={'date'} id="returnDate"></input>
                    </div>
                    <div className="input-container">
                        <span>Adults</span>
                        <input type={'number'} min='1' max='2' id="adultNum"></input>
                    </div>
                </div>
                <button onClick={searchResults}>SEARCH</button>
            </div >
            <div className="search-results-display">
            </div>
            <Results data={flights} setData={setFlights} />
        </div>
    )
}