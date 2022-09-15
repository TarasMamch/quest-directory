import React from 'react';

function NavTabs({ setCurrentPage, setPage }) {

    return (
        <div className='nav-bar search-container'>
            <a
                onClick={() => setCurrentPage('Flights')}>
                Flights
            </a>
            <a
                onClick={() => setCurrentPage('Hotels')}>
                Hotels
            </a>
            <a
                onClick={() => setCurrentPage('Rentals')}>
                Car Rentals
            </a>
        </div>
    )
}

export default NavTabs;