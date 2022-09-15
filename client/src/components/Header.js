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
                <span>
                    <Link to="/saved-trips">Saved Trips</Link>
                </span>
                <span>
                    <a onClick={logOut}>Logout</a>
                </span>
            </div>
        </div>
    )
}

export default Header;