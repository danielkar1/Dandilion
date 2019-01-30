const express = require('express')
const passportstuff = require(`./passport-setup`)
const router = express.Router()
const Socket = require(`./socketIO-setup`)
const Twitter = require(`twitter`)
const io = Socket.io
const mongoose = require(`mongoose`)
const CONSTS = require(`../../CONSTS`)
mongoose.connect('mongodb://localhost:27017/one-click-post', { useNewUrlParser: true });
const sqlOperations = require(`../../src/PopulateDb`)
let TWITTER_CONFIG = CONSTS.TWITTER_CONFIG
let addSocketIdToSession = passportstuff.addSocketIdToSession
let twitterAuth = passportstuff.twitterAuth

router.get(`/`, function (req, res) {
   console.log("server is sain")
   res.send("router is running")
})

router.get('/twitter', addSocketIdToSession, twitterAuth)


router.get('/twitter/callback', twitterAuth, (req, res) => {
   io.in(req.session.socketId).emit('user', req.user)
   console.log(`twitter callback sec`)
   res.end()
})

router.post(`/twitter/post`,async (req, res) => {
   // let userKeys = await 
   let currentUser = new Twitter({
      consumer_key: TWITTER_CONFIG.consumerKey,
      consumer_secret: TWITTER_CONFIG.consumerSecret,
      access_token_key: req.body.accessToken,
      access_token_secret: req.body.refreshToken
   })
   currentUser.post(`statuses/update`, { status: req.body.text })
      .then((res) => {
         console.log(`posted`)
      })
      .catch(err => {
         throw err
      })
   res.end()
})

router.post('/login', (req, res) => {
   sqlOperations.getUserId(req.body.passowrd,req.body.name) 
   .then ((id)=>{
      console.log(id)
      res.send(id)
   } ) 
})

module.exports = router