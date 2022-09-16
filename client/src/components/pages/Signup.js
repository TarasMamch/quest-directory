import React, { useEffect, useState } from "react"
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()

    function signup() {
        Axios.post("http://localhost:5000/api/users", {
            username: username,
            password: password
        }).then((response) => {
            navigate("/login")
        })
    }

    return (
        <div id="signup-container">
            <h1> Signup</h1>
            <div className="username-input-container">
                <span>Username</span>
                <input className="username-input" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
            </div>
            <div className="password-input-container">
                <span>Password</span>
                <input className="password-input" type="password" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>
            </div>
            <button onClick={signup}>Signup</button>
            <Link to="/login">Login Instead</Link>
        </div >
    )
}