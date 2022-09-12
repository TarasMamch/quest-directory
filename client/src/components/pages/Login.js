import React, { useEffect, useState } from "react"
import Axios from "axios";
import Main from '../MainContainer'

export default function Login() {
    let loginPageSetUp = true

    function setPage() {
        const loginContainer = document.getElementById("login-container")
        const signupContainer = document.getElementById("signup-container")

        if (loginPageSetUp) {
            loginContainer.style.display = 'none'
            signupContainer.style.display = 'flex'
            loginPageSetUp = false
        } else {
            loginContainer.style.display = 'flex'
            signupContainer.style.display = 'none'
            loginPageSetUp = true
        }
    }

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

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
            if (response.data.username) {
                setLoginStatus(response.data.username);
            }
        });
    }

    function signup() {
        Axios.post("http://localhost:5000/api/users", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
            loginPageSetUp = true
        })
    }

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
                    <a onClick={setPage}>Signup Instead</a>
                </div>

                <div id="signup-container">
                    <h1>Signup</h1>
                    <div className="username-input-container">
                        <span>Username</span>
                        <input className="username-input" onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}></input>
                    </div>
                    <div className="password-input-container">
                        <span>Password</span>
                        <input className="password-input" type="password" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}></input>
                    </div>
                    <button onClick={signup}>Signup</button>
                    <a onClick={setPage}>Login Instead</a>
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