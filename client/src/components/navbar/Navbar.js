import React from "react";

export default function Navbar(props) {
    return (
        <>
            <button onClick={()=> (props.setShowForm((prevState) => (!prevState)))}>+</button>
            <h3>Navbar</h3>
        </>
    )
}