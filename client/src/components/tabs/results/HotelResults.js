import React, { useEffect, useState } from "react";

export default function HotelResults({ data, getTime }) {

    function saveData(data) {
        const dataObj = {
            name: data[0].innerHTML,
            stars: data[1].innerHTML,
            price: data[2].innerHTML,
        }
        console.log(dataObj)
    }

    return (
        <div>
            {data.map((hotel) => {
                return (
                    <div className="results-container">
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
