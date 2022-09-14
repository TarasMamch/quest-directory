import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios"

function Header({ setLoginStatus, setUserId }) {

    async function logOut() {
        await Axios.get("http://localhost:5000/logout")
        setLoginStatus("")
        setUserId(0)
    }

    return (
        <div className='header'>
            <h1>Quest Directory</h1>
            <div id='header-links'>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <a onClick={logOut}>Logout</a>
            </div>
        </div>
    )
}

export default Header;