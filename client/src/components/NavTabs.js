import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='nav-bar search-container'>
            <a
                href="#flights"
                onClick={() => handlePageChange('Flights')}>
                Flights
            </a>
            <a
                href="#hotels"
                onClick={() => handlePageChange('Hotels')}>
                Hotels
            </a>
            <a
                href="#rentals"
                onClick={() => handlePageChange('Rentals')}>
                Car Rentals
            </a>
        </div>
    )
}

export default NavTabs;