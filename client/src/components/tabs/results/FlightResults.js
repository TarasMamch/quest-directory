import React, { useEffect, useState } from "react";

export default function FlightResults({ searchResults, savedTrips }) {
    let page = null

    const getTime = (param) => {
        const time = new Date(param)
        return `${time.getHours()} : ${time.getMinutes()}`
    }

    function currentPage() {
        if (document.location.href === "http://localhost:3000/") {
            page = searchResults
        } if (document.location.href === "http://localhost:3000/saved-trips") {
            page = savedTrips
        }
    }

    function saveData(data) {
        const dataObj = {
            airline: data[0].innerHTML,
            flightOneTime: data[1].children[0].innerHTML,
            flightOneDestination: data[1].children[1].innerHTML,
            flightTwoTime: data[3].children[0].innerHTML,
            flightTwoDestination: data[3].children[1].innerHTML,
            price: data[4].innerHTML,
            link: data[5].children[0].href
        }
        console.log(dataObj)
    }

    currentPage()

    return (
        <div>
            {page.map((flight, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h1>{flight.legs[0].carriers.marketing[0].name}</h1>
                        <div>
                            <h3>{getTime(flight.legs[0].departure)} - {getTime(flight.legs[0].arrival)}</h3>
                            <h3>{flight.legs[0].origin.displayCode} to {flight.legs[0].destination.displayCode}</h3>
                        </div>
                        <span>-</span>
                        <div>
                            <h3>{getTime(flight.legs[1].departure)} - {getTime(flight.legs[1].arrival)}</h3>
                            <h3>{flight.legs[1].origin.displayCode} to {flight.legs[1].destination.displayCode}</h3>
                        </div>
                        <h2>${flight.pricing_options[0].price.amount}</h2>
                        <div className="button-container">
                            <a href={flight.deeplink} target='_blank'>Link</a>
                            <button onClick={(e) => {
                                saveData(e.target.parentElement.parentElement.children)
                            }}>Save</button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}