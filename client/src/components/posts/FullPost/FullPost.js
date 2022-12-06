import React, { useState, useEffect, useRef } from "react";
import useClickOutsideToClose from '../../../utils/useClickOutsideToClose'
import { getPost } from "../../../api";

import '../../css/Overlay.css'
import './FullPost.css'

export default function FullPost({ currentId, setShowFullPost }) {
    const wrapperRef = useRef(null)
    useClickOutsideToClose(wrapperRef, setShowFullPost)

    const [postData, setPostData] = useState({
        creator: '',
        likeCount: '',
        title: '',
        message: '',
        tags: '',
        imgData: {
            url: '',
            secure_url: '',
        },
    })
    console.log(postData)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(currentId)
            setPostData(data.data)
        }
        fetchData()
    }, [])

    return (
        <div className="overlay-container" ref={wrapperRef}>
            <div className="full-post-body">
                <div>
                    <div>
                        {postData.creator}
                    </div>
                    <div className="full-post-title">
                        {postData.title}
                    </div>
                </div>

                <div>
                    {postData.message}
                </div>

                    <img className="full-post-img" src={postData.imgData.url} />

                <div>
                    <div>{postData.likeCount}</div>
                </div>
            </div>
        </div>
    )
}