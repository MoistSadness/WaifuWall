/**
 * How to close div when you click outside of it.
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts.js'

import './Form.css'

/**
* Hook that alerts clicks outside of the passed ref
*/
function useOutsideAlerter(ref, props) {
    console.log('initref', ref)
    useEffect(() => {
        console.log('ref', ref)
        /**
         * Close form if clicked outside
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //alert("You clicked outside of me!");
                props.setShowForm(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const emptyForm = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
}

export default function Form(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props);

    // State that manages the contents of the form
    const [postData, setPostData] = useState(emptyForm)

    // Fetching data from redux store
    const post = useSelector((state) => (props.currentId ? state.posts.find((message) => message._id === props.currentId) : null));
    console.log(post)

    const dispatch = useDispatch()

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

        //console.log('formdata', formData)

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