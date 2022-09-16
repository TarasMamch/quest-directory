import React from 'react';

function NavTabs({ setCurrentPage }) {

    return (
        <div className='nav-bar'>
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