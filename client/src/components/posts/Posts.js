import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import {useSelector} from 'react-redux'

import useStyles from './styles.js'
import Post from './post/Post.js'

export default function Posts(){
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    console.log(posts)

    const postElements = posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}/>
        </Grid>
    ))

    return(
        <>
            {!posts.length ? <CircularProgress /> : 
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {postElements}
                </Grid>
            }
        </>

    )
}