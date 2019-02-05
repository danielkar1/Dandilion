const api = require("./server/routes/router")
const session = require('express-session')
const cors = require('cors')
const passport = require(`passport`)
const CONSTS = require(`./CONSTS`)
const express = require('express')
const app = express()
app.use(express.json())
app.use(passport.initialize())

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
