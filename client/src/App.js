import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import Home from "./components/Home"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    const [loginStatus, setLoginStatus] = useState("");
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        Axios.get("http://localhost:5000/login").then((response) => {
            if (response.data.loggedIn) {
                changeLoginStatus(response.data.user.username);
                changeUserId(response.data.user.id);
            }
        });
    }, []);

    const changeLoginStatus = (data) => setLoginStatus(data)
    const changeUserId = (data) => setUserId(data)

    return (
        <div>
            <Header />
            <div className="main-body">
                <Routes>
                    <Route path="/" element={<Home loginStatus={loginStatus} userId={userId} changeLoginStatus={changeLoginStatus} changeUserId={changeUserId} />} />
                    <Route path="/login" element={<Login loginStatus={loginStatus} changeLoginStatus={changeLoginStatus} changeUserId={changeUserId} />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;