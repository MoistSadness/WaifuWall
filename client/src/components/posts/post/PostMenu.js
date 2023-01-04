import React from "react";

import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts.js'

export default function PostMenu({ post, setShowMenu }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className="card-menu-title-container">
                <span className="material-symbols-outlined" onClick={() => { setShowMenu(false) }}>
                    close
                </span>
            </div>
            <div className="card-menu-container">
                <div className="card-menu-btn-container">
                    <button className="card-menu-btn card-menu-delete" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                </div>
            </div>
        </>
    )
}

/* --- In case I want the update button back ---

return (
        <>
            <div className="card-menu-title-container">
                <span className="material-symbols-outlined" onClick={() => { setShowMenu(false) }}>
                    close
                </span>
            </div>
            <div className="card-menu-container">
                <div className="card-menu-btn-container">
                    <button className="card-menu-btn">Update</button>
                    <button className="card-menu-btn card-menu-delete" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                </div>
            </div>
        </>
*/