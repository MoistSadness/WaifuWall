import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts.js'
import PostCard from "./PostCard.js";
import PostMenu from "./PostMenu.js";

import './Post.css'

export default function Post({ post, setCurrentId, setShowFullPost }) {
    const [showMenu, setShowMenu] = useState(false)    



    const dispatch = useDispatch()

    

    return (
        <section className="card-container" >
            <div className="card-body">
                {showMenu ? 
                    <PostMenu post={post} setShowMenu={setShowMenu} /> : 
                    <PostCard post={post} setCurrentId={setCurrentId} setShowFullPost={setShowFullPost} setShowMenu={setShowMenu} />
                }
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