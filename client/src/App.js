import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Axios from "axios";
import Home from "./components/Home"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import SavedTrips from "./components/pages/SavedTrips";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    const [loginStatus, setLoginStatus] = useState("");
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        Axios.get("http://localhost:5000/login", { withCredentials: true }).then((response) => {
            if (response.data.loggedIn) {
                setLoginStatus(response.data.user.username);
                setUserId(response.data.user.id);
            }
        });
    }, []);

    return (
        <div>
            <Header setLoginStatus={setLoginStatus} setUserId={setUserId} />
            <div className="main-body">
                <Routes>
                    <Route exact path="/" element={loginStatus.length > 0 ? <Home /> : <Navigate replace to="/login" />} />
                    <Route exact path="/login" element={loginStatus.length > 0 ? <Navigate replace to="/" /> : <Login changeLoginStatus={setLoginStatus} changeUserId={setUserId} />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/saved-trips" element={loginStatus.length > 0 ? <SavedTrips loginName={loginStatus} userId={userId} /> : <Navigate replace to="/login" />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;