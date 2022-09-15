import React, { useEffect, useState } from "react";

export default function RentalResults({ searchResults, savedTrips }) {
    let page = null

    function currentPage() {
        if (document.location.href === "http://localhost:3000/") {
            page = searchResults
        } if (document.location.href === "http://localhost:3000/saved-trips") {
            page = savedTrips
        }
    }

    function saveData(data) {
        const dataObj = {
            vender: data[0].innerHTML,
            name: data[1].innerHTML,
            price: data[2].innerHTML,
        }
        console.log(dataObj)
    }

    currentPage()

    return (
        <div>
            {page.map((car, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h1 className="rental-vndr">{car.vndr}</h1>
                        <h3 className="car-name">{car.car_name}</h3>
                        <h3 className="rental-price">${car.price}</h3>
                        <div className="button-container">
                            <button onClick={(e) => {
                                saveData(e.target.parentElement.parentElement.children)
                            }}>Save</button>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}