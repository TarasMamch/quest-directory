import React, { useEffect, useState } from "react";

export default function HotelResults({ searchResults, savedTrips }) {
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
            name: data[0].innerHTML,
            stars: data[1].innerHTML,
            price: data[2].innerHTML,
        }
        console.log(dataObj)
    }

    currentPage()

    return (
        <div>
            {page.map((hotel, index) => {
                return (
                    <div className="results-container" key={index}>
                        <h3 className="hotel-name">{hotel.name}</h3>
                        <h3 className="hotel-stars">Stars : {hotel.stars}</h3>
                        <h3 className="hotel-price">{hotel.price}</h3>
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
