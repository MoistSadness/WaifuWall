import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

//import useStyles from './styles.js'
//import memories from './static/imgg.png'
import Navbar from './components/navbar/Navbar.js'
import Form from './components/form/Form.js'
import Posts from './components/posts/Posts.js'
import Login from './components/navbar/access/Login.js'
import Register from './components/navbar/access/Register.js'
import FullPost from "./components/posts/FullPost/FullPost.js";

import { getPosts } from './actions/posts.js'

export default function App() {
    const [currentId, setCurrentId] = useState(null)
    //console.log(currentId)

    const [showForm, setShowForm] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFullPost, setShowFullPost] = useState(false)
    //console.log(showForm)
    //console.log(showLogin)
    //console.log(showRegister)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="app-container">
            <Navbar
                showForm={showForm}
                setShowForm={setShowForm}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                showRegister={showRegister}
                setShowRegister={setShowRegister}
            />
            <div>
                {showForm ? <Form showForm={showForm} setShowForm={setShowForm} currentId={null} /> : null}
                {showLogin ? <Login showLogin={showLogin} setShowLogin={setShowLogin} /> : null}
                {showRegister ? <Register showRegister={showRegister} setShowRegister={setShowRegister} /> : null}
                {showFullPost && currentId && <FullPost currentId={currentId} setShowFullPost={setShowFullPost}/>}

                <Posts setCurrentId={setCurrentId} setShowFullPost={setShowFullPost}/>
            </div>
        </div>
    )
}





/*
<div>
    <Navbar />
    <Container maxWidth='lg'>
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
</div>
*/