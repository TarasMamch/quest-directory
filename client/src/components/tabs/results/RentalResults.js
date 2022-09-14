import React, { useEffect, useState } from "react";

export default function RentalResults({ data, getTime }) {

    let rentalPrice = 303.11

    function saveData(data) {
        const dataObj = {
            vender: data[0].innerHTML,
            name: data[1].innerHTML,
            price: data[2].innerHTML,
        }
        console.log(dataObj)
    }

    return (
        <div>
            {data.map((car) => {
                return (
                    <div className="results-container">
                        <h1 className="rental-vndr">{car.vndr}</h1>
                        <h3 className="car-name">{car.car_name}</h3>
                        <h3 className="rental-price">${rentalPrice}</h3>
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