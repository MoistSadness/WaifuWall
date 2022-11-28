/**
 * How to close div when you click outside of it.
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

import React, { useState, useEffect, useRef } from "react";
import useClickOutsideToClose from '../../utils/useClickOutsideToClose.js'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts.js'

import './Form.css'

const emptyForm = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
}

export default function Form(props) {
    // State that manages the contents of the form
    const [postData, setPostData] = useState(emptyForm)
    console.log(postData)

    // Fetching data from redux store
    const post = useSelector((state) => (props.currentId ? state.posts.find((message) => message._id === props.currentId) : null));
    //console.log(post)

    const dispatch = useDispatch()

    // Create ref and call the hook that closes the form when the user clicks outside of it
    const wrapperRef = useRef(null);
    useClickOutsideToClose(wrapperRef, props.setShowForm);

    // Set the data in the form when a post is selected
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

        console.log('formdata', formData)

        if (props.currentId) {
            formData.append('selectedFile', post.imgData.url)
            dispatch(updatePost(props.currentId, formData))
        } else {
            formData.append('selectedFile', postData.selectedFile)
            dispatch(createPost(formData))
        }
    }

    function clear() {
        setPostData(emptyForm)
    }



    return (
        <div className="form-body" ref={wrapperRef}>
            <Paper>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <div >
                        <input type="file" onChange={(event) => setPostData({ ...postData, selectedFile: event.target.files[0] })} />
                    </div>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>S U B M I T</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>C L E A R</Button>
                </form>
            </Paper>
        </div>
    )
}