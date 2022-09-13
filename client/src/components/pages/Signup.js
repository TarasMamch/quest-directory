import React, { useEffect, useState } from "react"
import Axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function signup() {
        Axios.post("http://localhost:5000/api/users", {
            username: username,
            password: password
        }).then((response) => {
            loginRedirect()
        })
    }

    const loginRedirect = () => document.location.href = "/"

    return (
        <div>
            <div id="signup-container">
                <h1>Signup</h1>
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
                <a onClick={loginRedirect}>Login Instead</a>
            </div >
        </div >
    )
}