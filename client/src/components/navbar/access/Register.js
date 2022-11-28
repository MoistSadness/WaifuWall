import React, {useRef} from "react";
import useClickOutsideToClose from "../../../utils/useClickOutsideToClose";

import './Access.css'

export default function Register(props) {
    const wrapperRef = useRef(null)
    useClickOutsideToClose(wrapperRef, props.setShowRegister)

    return (
        <div className="access-body" ref={wrapperRef}>
            <p>Register</p>
        </div>
    )
}