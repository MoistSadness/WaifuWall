import React from "react";

export default function PostCard({ post, setCurrentId, setShowFullPost, setShowMenu }) {
    function handleClick() {
        setCurrentId(post._id)
        //console.log(post._id)
        setShowFullPost(true)
    }

    return (
        <>
            <div className="card-title-wrapper">
                <div className="card-title-container">
                    <div className="card-profile-icon">
                        <div className="card-profile-icon-text">
                            {post.creator[0].toUpperCase()}
                        </div>
                    </div>
                    <h4 className="card-creator">{post.creator}</h4>
                </div>
                <span className="material-symbols-outlined" onClick={() => { setShowMenu(true) }}>
                    more_vert
                </span>
            </div>
            <img className="card-img" src={post.imgData.url} onClick={handleClick} />
        </>
    )
}
