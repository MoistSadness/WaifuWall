import React from "react";
import Access from "./access/Login";

import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className="nav-container">
            <div className="nav-button">
                <button className="nav-new" onClick={() => (props.setShowForm((prevState) => (!prevState)))}>
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>
            <h3 className="nav-title">WaifuWall</h3>
            <div className="nav-button">
                <span>
                    <button className="nav-access" onClick={() => (props.setShowLogin((prevState) => (!prevState)))}>Login</button>
                </span>
                <span>
                    <button className="nav-access" onClick={() => (props.setShowRegister((prevState) => (!prevState)))}>Register</button>
                </span>
            </div>
        </nav>
    )
}