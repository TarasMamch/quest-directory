import React, { useEffect, useState } from "react"
import Axios from "axios";

export default function Login({ loginStatus, changeLoginStatus, changeUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    Axios.defaults.withCredentials = true;

    function login() {
        Axios.post("http://localhost:5000/api/users/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.username) {
                changeLoginStatus(response.data.username);
                changeUserId(response.data.id);
                // document.location.href = '/'
            }
        });
    }

    const signUpRedirect = () => document.location.href = "/signup"

    function LoginTemplete() {
        return (
            <div>
                <div id="login-container">
                    <h1>Login</h1>
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
                    <button onClick={login}>Login</button>
                    <a onClick={signUpRedirect}>Signup Instead</a>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* {loginStatus.length > 0 ? document.location.href = "/" : LoginTemplete()} */}
        </div>
    )
}