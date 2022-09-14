import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='nav-bar search-container'>
            <a
                onClick={() => handlePageChange('Flights')}>
                Flights
            </a>
            <a
                onClick={() => handlePageChange('Hotels')}>
                Hotels
            </a>
            <a
                onClick={() => handlePageChange('Rentals')}>
                Car Rentals
            </a>
        </div>
    )
}

export default NavTabs;