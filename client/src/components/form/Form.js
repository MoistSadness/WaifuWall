/**
 * How to close div when you click outside of it.
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

import React, { useState, useEffect, useRef } from "react";
import useClickOutsideToClose from '../../utils/useClickOutsideToClose.js'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../css/Overlay.css'
import './Form.css'

const emptyForm = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
}

export default function Form({ showForm, setShowForm, currentId }) {
    // State that manages the contents of the form
    const [postData, setPostData] = useState(emptyForm)
    console.log(postData)

    // Fetching data from redux store
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    //console.log(post)

    const dispatch = useDispatch()

    // Create ref and call the hook that closes the form when the user clicks outside of it
    const wrapperRef = useRef(null);
    useClickOutsideToClose(wrapperRef, setShowForm);

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

        if (currentId) {
            formData.append('selectedFile', post.imgData.url)
            dispatch(updatePost(currentId, formData))
            setShowForm(false)
        } else {
            formData.append('selectedFile', postData.selectedFile)
            const submit = dispatch(createPost(formData))
            setShowForm(false)
        }

        // Close overlay
        setShowForm(false)
    }

    return (
        <>
        <ToastContainer />

        <div className="overlay-container" ref={wrapperRef}>
            <form className="form-container" autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-title">Add to the Wall</div>
                <div className="form-body">
                    <label className="form-item">
                        <input placeholder="Creator" type="text" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </label>
                    <label className="form-item">
                        <input placeholder="Title" type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    </label>
                    <label className="form-item">
                        <textarea placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    </label>
                    <label className="form-item">
                        <input placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',').map(tag => tag.toLowerCase().replace(/ /g, '')) })} />
                    </label>
                    <div className="form-item">
                        <input type="file" onChange={(event) => setPostData({ ...postData, selectedFile: event.target.files[0] })} />
                    </div>
                    <div className="form-submit-button">
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}