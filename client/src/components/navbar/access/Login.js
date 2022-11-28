import React, {useRef} from "react";
import useClickOutsideToClose from "../../../utils/useClickOutsideToClose";

import './Access.css'

export default function Login(props) {
    const wrapperRef = useRef(null)
    useClickOutsideToClose(wrapperRef, props.setShowLogin)

    return (
        <div className="access-body" ref={wrapperRef}>
            <p>Login</p>
        </div>
    )
}