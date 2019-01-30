const express = require('express')
const passportstuff = require(`./passport-setup`)
const router = express.Router()
const Socket = require(`./socketIO-setup`)
const io = Socket.io
const mongoose = require(`mongoose`)
mongoose.connect('mongodb://localhost:27017/one-click-post', {useNewUrlParser: true});

let addSocketIdToSession = passportstuff.addSocketIdToSession
let twitterAuth = passportstuff.twitterAuth

router.get(`/`, function (req, res) {
   console.log("server is sain")
   res.send("router is running")
})

router.get('/twitter', addSocketIdToSession, twitterAuth)

router.get('/twitter/callback', twitterAuth, (req, res) => {
   io.in(req.session.socketId).emit('user', req.user)
   console.log()
   res.end()
})

router.post(`/twitter/post`, (req, res) => {
   twitterUser.post(`statuses/update`, { status: 'trial7' })
      .then((res) => {
         console.log(req.body)
      })
      .catch(err => {
         throw err
      })
})


module.exports = router