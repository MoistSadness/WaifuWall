import React from "react";
import {useSelector} from 'react-redux'

import useStyles from './styles.js'
import Post from './post/Post.js'

export default function Posts(){
    const classes = useStyles();
    const selector = useSelector((state) => state.posts)
    console.log(selector)

    return(
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>

    )
}