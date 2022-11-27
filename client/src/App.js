import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

//import useStyles from './styles.js'
//import memories from './static/imgg.png'
import Navbar from './components/navbar/Navbar.js'
import Form from './components/form/Form.js'
import Posts from './components/posts/Posts.js'
import { getPosts } from './actions/posts.js'


export default function App() {
    const [currentId, setCurrentId] = useState(null)
    const [showForm, setShowForm] = useState(false)
    console.log(showForm)

    //const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="app-container">
            <Navbar showForm={showForm} setShowForm={setShowForm} />
            <div>
                {showForm ? <Form showForm={showForm} setShowForm={setShowForm}/> : null}
                <Posts />
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