import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='nav-bar search-container'>
            <a
                href="#flights"
                onClick={() => handlePageChange('Flights')}
                className={currentPage === 'Flights' ? 'nav-link active' : 'nav-link'}>
                Flights
            </a>
            <a
                href="#hotels"
                onClick={() => handlePageChange('Hotels')}
                className={currentPage === 'Hotels' ? 'nav-link active' : 'nav-link'}>
                Hotels
            </a>
            <a
                href="#rentals"
                onClick={() => handlePageChange('Rentals')}
                className={currentPage === 'Rentals' ? 'nav-link active' : 'nav-link'}>
                Car Rentals
            </a>
        </div>
    )
}

export default NavTabs;