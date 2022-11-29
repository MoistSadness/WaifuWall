import React from "react";
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts.js'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

import './Post.css'
import Edit from "@mui/icons-material/Edit";

export default function Post({ post, setCurrentId }) {
    const dispatch = useDispatch()

    return (
        <section className="card-container" onClick={() => { console.log('hi') }}>
            <div className="card-body">
                <div className="title-container">
                    <h4 className="card-title">{post.title}</h4>
                    
                </div>
                <h5 className="card-creator"> - {post.creator}</h5>
                <img className="card-img" src={post.imgData.url} />
                
            </div>
        </section>
    )
}

/*
Icons

<div className="card-icons">
                    <span className="material-symbols-outlined icon-btn" onClick={() => dispatch(likePost(post._id))}>
                        favorite
                    </span>
                    <span className="material-symbols-outlined icon-btn" onClick={() => dispatch(deletePost(post._id))}>
                        delete
                    </span>
                </div>

                <span className="material-symbols-outlined icon-btn">
                        edit
                    </span>

*/


/**
<Card className="classes.card">
            <CardHeader title={post.title} subheader={post.creator} action={
                <IconButton aria-label="settings" onClick={() => {setCurrentId(post._id)}}>
                    <MoreVertIcon />
                </IconButton>
            }
            />
            <CardMedia className={classes.media} image={post.imgData.url} title={post.title} />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {post.message}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map(tag => `#${tag} `)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => dispatch(likePost(post._id))}>
                    &nbsp;
                    <FavoriteIcon />
                    &nbsp;
                    {post.likeCount}
                </IconButton>
                <IconButton aria-label="add to favorites" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
 */