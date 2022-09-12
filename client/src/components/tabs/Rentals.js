import React, { useState } from "react";
import Results from "./SearchResults";

export default function Rentals() {
    const [rentals, setRentals] = useState([])

    async function searchResults() {
        const searchCity = document.querySelector('#rental-city-search').value
        const pickUp = new Date(document.querySelector('#pick-up-date').value)
        const pickUpDate = `${pickUp.getFullYear()}-${("0" + (pickUp.getMonth() + 1)).slice(-2)}-${("0" + pickUp.getDate()).slice(-2)}`
        const dropOff = new Date(document.querySelector('#drop-off-date').value)
        const dropOffDate = `${dropOff.getFullYear()}-${("0" + (dropOff.getMonth() + 1)).slice(-2)}-${("0" + dropOff.getDate()).slice(-2)}`

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9542fa2d8msh67a0d44db6352b1p112cd6jsn3123864a8840',
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        }

        const idResponse = await fetch(`https://skyscanner44.p.rapidapi.com/autocomplete-rentacar?query=${searchCity}`, options)
        const idData = await idResponse.json()
        console.log(idData)
        const cityId = idData[0].entity_id

        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=${cityId}&pickupDate=${pickUpDate}&pickupTime=10%3A00&returnDate=${dropOffDate}&returnTime=10%3A00&currency=USD`, options)
        const data = await response.json()
        console.log(data)
        setRentals(data.quotes)
    }

    return (
        <div>
            <div className="search-containers">
                <div className="indented-search-container">
                    <div className="input-container">
                        <span>City</span>
                        <input placeholder="City" id="rental-city-search"></input>
                    </div>
                    <div className="input-container">
                        <span>Pick-up Date</span>
                        <input type={'date'} id="pick-up-date"></input>
                    </div>
                    <div className="input-container">
                        <span>Drop-off Date</span>
                        <input type={'date'} id="drop-off-date"></input>
                    </div>
                </div>
                <button onClick={searchResults}>SEARCH</button>
            </div>
            <div className="search-results-display">
            </div>
            <Results data={rentals} />
        </div>

    )
}