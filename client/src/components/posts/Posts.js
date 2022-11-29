import React from "react";
import { v4 as uuidv4 } from 'uuid'
import { CircularProgress } from "@material-ui/core";
import {useSelector} from 'react-redux'

import Post from './post/Post.js'
import './Posts.css'

export default function Posts({setCurrentId}){
    const posts = useSelector((state) => state.posts)
    console.log(posts)

    const postElements = posts.map(post => (
        <div className="posts-grid-item" key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
        </div>
    ))
    
    return(
        <div className="posts-container">
            {!posts.length ? <CircularProgress /> :
                <div className="posts-grid"> 
                    {postElements}
                </div>
            }
        </div>

    )
}