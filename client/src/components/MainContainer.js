import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import NavTabs from './NavTabs'
import Flights from './tabs/Flights'
import Hotels from './tabs/Hotels'
import Rentals from './tabs/Rentals'

export default function Main() {

    const [currentPage, setCurrentPage] = useState('Flights');

    const renderPage = () => {
        if (currentPage === 'Flights') {
            return <Flights />;
        }
        if (currentPage === 'Hotels') {
            return <Hotels />;
        }
        if (currentPage === 'Rentals') {
            return <Rentals />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='main-body'>
            <div className='main-page-container'>
                <div>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                    {renderPage()}
                </div>
            </div>
        </div>
    )
}