import React, { useEffect, useState } from "react"
import NavTabs from "./NavTabs"
import Flights from "./tabs/Flights"
import Hotels from "./tabs/Hotels"
import Rentals from "./tabs/Rentals"

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Flights")

    function changeTabs() {
        if (currentPage === 'Flights') {
            return <Flights currentPage={currentPage} />;
        }
        if (currentPage === 'Hotels') {
            return <Hotels currentPage={currentPage} />;
        }
        if (currentPage === 'Rentals') {
            return <Rentals currentPage={currentPage} />;
        }
    }

    return (
        <div className='main-body'>
            <div className='main-page-container'>
                <div>
                    <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    {changeTabs()}
                </div>
            </div>
        </div>
    )
}