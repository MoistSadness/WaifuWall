import React from "react";
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import moment from 'moment'
import useStyles from './styles.js'

export default function Post({ post, setCurrentId }) {
    const classes = useStyles();
    
    return (
        <Card className="classes.card">
            <CardHeader title={post.title} subheader={post.creator} action={
                <IconButton aria-label="settings" onClick={() => {setCurrentId(post._id)}}>
                    <MoreVertIcon />
                </IconButton>
            }
            />
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    {post.likeCount}
                </IconButton>
            </CardActions>
        </Card>
    )
}




/*
        <Card className="classes.card">
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt)}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onclick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <ThumbUpAltIcon size="small"/>
                        Like
                        {post.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <ThumbUpAltIcon size="small"/>
                        Delete
                    </Button>
                </CardActions>
            </div>
        </Card>
*/