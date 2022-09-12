import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from './components/Header'
import Main from './components/MainContainer'
import Login from "./components/pages/Login";

function App() {
    return (
        <div>
            <Header />
            <div className="main-body">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Main />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;