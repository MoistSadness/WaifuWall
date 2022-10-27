import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import useStyles from './styles.js'
import memories from './static/imgg.png'
import Form from './components/form/Form.js'
import Posts from './components/posts/Posts.js'
import {getPosts} from './actions/posts.js'


export default function App() {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt={memories} height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}