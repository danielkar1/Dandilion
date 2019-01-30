// const path = require('path')
// const bodyParser = require('body-parser')
const api = require("./server/routes/router")
const session = require('express-session')
const cors = require('cors')
const passport = require(`passport`)
const CONSTS = require(`./CONSTS`)
const Socket = require(`./server/routes/socketIO-setup`)
const express = require('express')
// Create the server and allow express and socketio to run on the same port
const server = Socket.server
const app = Socket.app
// Allows the application to accept JSON and use passport
app.use(express.json())
app.use(passport.initialize())

// Set up cors to allow us to accept requests from our client
app.use(cors({
    origin: 'http://localhost:3000'
}))

// saveUninitialized: true allows us to attach the socket id
// to the session before we have authenticated with Twitter  
app.use(session({
    secret: CONSTS.sessionSecret ,
    resave: true,
    saveUninitialized: true
}))

// allows us to save the user into the session
passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

app.use(`/`,api)

server.listen(8080, () => {
    console.log('Working on port 8080')
})
