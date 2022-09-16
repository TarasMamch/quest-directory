import React, { useEffect, useState } from "react"
import NavTabs from "./NavTabs"
import Flights from "./tabs/Flights"
import Hotels from "./tabs/Hotels"
import Rentals from "./tabs/Rentals"

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Flights")
    const [loading, setLoading] = useState(false)

    const getDate = (param) => {
        const date = new Date(param)
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e9542fa2d8msh67a0d44db6352b1p112cd6jsn3123864a8840',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    }

    async function getCityId(cityName) {
        const idResponse = await fetch(`https://skyscanner44.p.rapidapi.com/autocomplete-hotel?query=${cityName}`, options)
        const idData = await idResponse.json()
        return idData[0].entity_id
    }

    function changeTabs() {
        if (currentPage === 'Flights') {
            return <Flights currentPage={currentPage} loading={loading} setLoading={setLoading} options={options} getDate={getDate} />;
        }
        if (currentPage === 'Hotels') {
            return <Hotels currentPage={currentPage} loading={loading} setLoading={setLoading} options={options} cityId={getCityId} getDate={getDate} />;
        }
        if (currentPage === 'Rentals') {
            return <Rentals currentPage={currentPage} loading={loading} setLoading={setLoading} options={options} cityId={getCityId} getDate={getDate} />;
        }
    }

    return (
        <div className='main-body'>
            <div className='main-page-container'>
                <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
                {changeTabs()}
            </div>
        </div>
    )
}