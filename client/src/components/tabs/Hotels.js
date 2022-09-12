import React, { useState } from "react";
import Results from "./SearchResults";

export default function Hotels() {
    const [hotels, setHotels] = useState([])

    async function searchResults() {
        const searchName = document.querySelector('#hotel-city-name').value
        const adultNumb = document.querySelector('#hotel-adult-numb').value
        const checkin = new Date(document.querySelector('#hotel-checkin-date').value)
        const checkinDate = `${checkin.getFullYear()}-${("0" + (checkin.getMonth() + 1)).slice(-2)}-${("0" + checkin.getDate()).slice(-2)}`
        const checkout = new Date(document.querySelector('#hotel-checkout-date').value)
        const checkoutDate = `${checkout.getFullYear()}-${("0" + (checkout.getMonth() + 1)).slice(-2)}-${("0" + checkout.getDate()).slice(-2)}`

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9542fa2d8msh67a0d44db6352b1p112cd6jsn3123864a8840',
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        }

        const idResponse = await fetch(`https://skyscanner44.p.rapidapi.com/autocomplete-hotel?query=${searchName}`, options)
        const idData = await idResponse.json()
        console.log(idData)
        const cityId = idData[0].entity_id

        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-hotel?locationId=${cityId}&adults=${adultNumb}&rooms=1&checkin=${checkinDate}&checkout=${checkoutDate}&currency=USD`, options)
        const data = await response.json()
        console.log(data)
        setHotels(data)
    }

    return (
        <div>
            <div className="search-containers">
                <div className="indented-search-container">
                    <div className="input-container">
                        <span>City</span>
                        <input placeholder="City" id="hotel-city-name"></input>
                    </div>
                    <div className="input-container">
                        <span>Adults</span>
                        <input type={'number'} min='1' max='5' id="hotel-adult-numb"></input>
                    </div>
                    <div className="input-container">
                        <span>Checkin Date</span>
                        <input type={'date'} id='hotel-checkin-date'></input>
                    </div>
                    <div className="input-container">
                        <span>Checkout Date</span>
                        <input type={'date'} id='hotel-checkout-date'></input>
                    </div>
                </div>
                <button onClick={searchResults}>SEARCH</button>
            </div>
            <div className="search-results-display">
            </div>
            <Results data={hotels} />
        </div>
    )
}