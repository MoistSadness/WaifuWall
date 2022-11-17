import React, { useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import useStyles from './styles.js'
import { createPost, updatePost } from '../../actions/posts.js'

const emptyForm = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
}

export default function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState(emptyForm)
    console.log(postData.selectedFile)

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));       // Fetching data from redux store
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post)
        console.log(post)
    }, [post])

    function handleSubmit(e) {
        e.preventDefault()

        //Create formData objct to submit form
        const formData = new FormData()
        formData.append('creator', postData.creator)
        formData.append('title', postData.title)
        formData.append('message', postData.message)
        formData.append('tags', postData.tags)
        formData.append('selectedFile', postData.selectedFile)

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(formData))
        }
    }

    function clear() {
        setPostData(emptyForm)
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                <Typography
                    variant="h6"
                >
                    Creating a Memory
                </Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <input type="file" onChange={(event) => setPostData({...postData, selectedFile: event.target.files[0]})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>S U B M I T</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>C L E A R</Button>
            </form>
        </Paper>
    )
}