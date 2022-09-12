import React, { useEffect, useState } from "react";

export default function Results({ data, setData }) {

    const getTime = (param) => {
        const time = new Date(param)
        return `${time.getHours()}: ${time.getMinutes()}`
    }

    let airline = 'Alaska Airlines'
    // airline = useEffect(() => { data.map(flight => flight.legs[0].carriers.marketing[0].name) }, [])
    let firstOrigin = "SEA"
    // firstOrigin = useEffect(() => { data.map(flight => flight.legs[0].origin.displayCode) }, [])
    let firstDestination = "JFK"
    // firstDestination = useEffect(() => { data.map(flight => flight.legs[0].destination.displayCode) }, [])
    let firstDepartTime = '2022-09-16T21:40:00'
    // firstDepartTime = useEffect(() => { data.map(flight => flight.legs[0].departure) }, [])
    let firstArriveTime = "2022-09-17T06:00:00"
    // firstArriveTime = useEffect(() => { data.map(flight => flight.legs[0].arrival) }, [])
    let secondOrigin = "JFK"
    // secondOrigin = useEffect(() => { data.map(flight => flight.legs[1].origin.displayCode) }, [])
    let secondDestination = "SEA"
    // secondDestination = useEffect(() => { data.map(flight => flight.legs[1].destination.displayCode) }, [])
    let secondDepartTime = '2022-09-16T21:40:00'
    // secondDepartTime = useEffect(() => { data.map(flight => flight.legs[1].departure) }, [])
    let secondArriveTime = "2022-09-17T06:00:00"
    // secondArriveTime = useEffect(() => { data.map(flight => flight.legs[1].arrival) }, [])
    let flightPrice = '$520.1'
    // price = useEffect(() => { data.map(flight => flight.pricing_options[0].price.amount) }, [])
    let flightUrl = 'https://www.skyscanner.net/transport/flights/sea/jfk/220915/220922/config/16177-2209151355--32593-0-12712-2209152213|12712-2209220945--32593-0-16177-2209221300?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27537542&originentityid=27538444&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1'
    // url = useEffect(() => { data.map(flight => flight.deeplink) }, [])

    let hotelName = "Red Roof Inn Seattle Airport - Seatac"
    //hotelName = useEffect(() => { data.map(hotel => hotel.name) }, [])
    let stars = '2'
    //stars = useEffect(() => { data.map(hotel => hotel.stars) }, [])
    let hotelPrice = "$452"
    //hotelPrice = useEffect(() => { data.map(hotel => hotel.price) }, [])

    let rentalVndr = "Avis"
    // rentalVndr = useEffect(() => { data.map(rental => rental.vndr) }, [])
    let carName = 'ford fiesta'
    // carName = useEffect(() => { data.map(rental => rental.car_name) }, [])
    let rentalPrice = 303.11

    function addData(data) {
        console.log(data)
    }

    let test = 'flights'

    const renderPage = () => {
        if (test === 'flights') {
            return (
                <div>
                    <div className="results-container">
                        <h1 className="airline">{airline}</h1>
                        <div>
                            <h3 className="flight-one-time">{getTime(firstDepartTime)} - {getTime(firstArriveTime)}</h3>
                            <h3 className="flight-one-destination">{firstOrigin} to {firstDestination}</h3>
                        </div>
                        <span>-</span>
                        <div>
                            <h3 className="flight-two-time">{getTime(secondDepartTime)} - {getTime(secondArriveTime)}</h3>
                            <h3 className="flight-two-destination">{secondOrigin} to {secondDestination}</h3>
                        </div>
                        <h2 className="flight-price">{flightPrice}</h2>
                        <div className="button-container">
                            <a href={flightUrl} target='_blank' name={flightUrl} className="link">Link</a>
                            <button onClick={() => {
                                const dataObj = {
                                    airline: document.querySelector('.airline').innerHTML,
                                    flightOneTime: document.querySelector('.flight-one-time').innerHTML,
                                    flightOneDestination: document.querySelector('.flight-one-destination').innerHTML,
                                    flightTwoTime: document.querySelector('.flight-two-time').innerHTML,
                                    flightTwoDestination: document.querySelector('.flight-two-destination').innerHTML,
                                    price: document.querySelector('.price').innerHTML,
                                    link: document.querySelector('.link').name
                                }
                                addData(dataObj)
                            }}>Save</button>
                        </div>
                    </div>
                </div>
            )
        } if (test === 'hotels') {
            return (
                <div>
                    <div className="results-container">
                        <h1 className="hotel-name">{hotelName}</h1>
                        <h3 className="hotel-stars">Stars : {stars}</h3>
                        <h3 className="hotel-price">{hotelPrice}</h3>
                        <div className="button-container">
                            <button onClick={() => {
                                const dataObj = {
                                    name: document.querySelector('.hotel-name').value,
                                    stars: document.querySelector('.hotel-stars').value,
                                    price: document.querySelector('.hotel-price').value
                                }
                                addData(dataObj)
                            }}>Save</button>
                        </div>
                    </div>
                </div>
            )
        } if (test === 'rental') {
            <div className="results-container">
                <h1 className="rental-vndr">{rentalVndr}</h1>
                <h3 className="car-name">{carName}</h3>
                <h3 className="rental-price">${rentalPrice}</h3>
                <div className="button-container">
                    <button onClick={() => {
                        const dataObj = {
                            vndr: document.querySelector('.rental-vndr').value,
                            carName: document.querySelector('.car-name').value,
                            rentalPrice: document.querySelector('.rental-price').value
                        }
                        addData(dataObj)
                    }}>Save</button>
                </div>
            </div>
        }
    }


    return (
        <div>
            {renderPage}
        </div>
    )
}