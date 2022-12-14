import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import dotenv from 'dotenv'

import posts from './routes/posts.js'

const app = express()
app.use(cors())
dotenv.config()

app.use(express.static('public'));

// for parsing application/json
app.use(bodyParser.json({ limit: '30mb', extended: true }))

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))

// Import routers
app.use('/posts', posts)

// Environment variables here
const secret = process.env.SECRET || "ThisShouldBeABetterSecret"
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/Memories"
const PORT = process.env.PORT || 5000

/**
 * General purpose error handler
 */
app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    if (!err.message) err.message = "Oh, no!";
    res.status(statusCode).send(message);
    //res.status(404).send("NOT FOUND!!!");
})

/*
    Connect to database and listen for requests here
    Currently using local MongoBD, switch to the cloud version for deployment
*/
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch((error) => console.log(error.message))





