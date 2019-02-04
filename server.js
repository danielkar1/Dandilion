const api = require("./server/routes/router")
const session = require('express-session')
const cors = require('cors')
const passport = require(`passport`)
const CONSTS = require(`./CONSTS`)
// const Socket = require(`./server/routes/socketIO-setup`)
const express = require('express')
// const server = Socket.server
// const app = Socket.app
const app = express()
app.use(express.json())
app.use(passport.initialize())
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost/Posts', { uslNewUrlParser : true})

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })


app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: CONSTS.sessionSecret,
    resave: true,
    saveUninitialized: true
}))

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

app.use(`/`, api)

app.listen(8080, () => {
    console.log('Working on port 8080')
})
