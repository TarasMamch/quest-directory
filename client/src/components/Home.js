import React, { useEffect, useState } from "react"
import Axios from "axios";
import NavTabs from "./NavTabs"
import Flights from "./tabs/Flights"
import Hotels from "./tabs/Hotels"
import Rentals from "./tabs/Rentals"

export default function Home({ loginStatus, userId, changeLoginStatus, changeUserId }) {

    const [currentPage, setCurrentPage] = useState('Flights');

    const handlePageChange = (page) => setCurrentPage(page);

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

    function renderPage() {
        return (
            <div className='main-body'>
                <div className='main-page-container'>
                    <div>
                        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                        {changeTabs()}
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        console.log(loginStatus)
    }, [])

    return (
        <div>
            {/* {loginStatus.length > 0 ? renderPage() : document.location.href = "/login"} */}
            {/* {renderPage()} */}
        </div>
    )
}