import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios"

function Header() {

    // async function logOut() {
    //     await Axios.get("http://localhost:5000/logout")
    //     document.location.href = '/login'
    // }

    return (
        <div className='header'>
            <h1>Quest Directory</h1>
            <div id='header-links'>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <a>Logout</a>
            </div>
        </div>
    )
}

export default Header;