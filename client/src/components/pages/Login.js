import React, { useEffect, useState } from "react"
import Axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const [userid, setUserId] = useState(0)

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:5000/login").then((response) => {
            if (response.data.loggedIn) {
                setLoginStatus(response.data.user.username);
            }
        });
    }, []);

    function login() {
        Axios.post("http://localhost:5000/api/users/login", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response)
            if (response.data.username) {
                setLoginStatus(response.data.username);
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
            {loginStatus.length > 0 ? document.location.href = '/home' : LoginTemplete()}
        </div>
    )
}