import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios"

function Navbar() {

    async function logOut() {
        await Axios.get("http://localhost:5000/logout")
        document.location.href = '/'
    }

    return (
        <div className='header'>
            <h1>Quest Directory</h1>
            <div className='header-links'>
                <span>
                    <Link to="/home">Home</Link>
                </span>
                <span onClick={logOut}>Logout</span>
            </div>
        </div>
    )
}

export default Navbar;