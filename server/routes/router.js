const express = require('express')
const { authenticate_media } = require(`./passport-setup`)
const router = express.Router()
// const Socket = require(`./socketIO-setup`)
const Twitter = require(`twitter`)
// const io = Socket.io
const mongoose = require(`mongoose`)
const CONSTS = require(`../../CONSTS`)
const { TWITTER_CONFIG } = require(`../../CONSTS`)
const Posts = require('../modules/Scheme')
mongoose.connect('mongodb://localhost:3000/Posts', { useNewUrlParser: true });
const sqlOperations = require(`../modules/PopulateDb`)
router.get(`/`, function (req, res) {
   console.log("server is sain")
   res.send("router is running")
})

// router.get('/:socialnet', addSocketIdToSession, Auth[req.params.socialnet])

// router.get('/callback/:socialnet', Auth[req.params.socialnet], (req, res) => {
//    io.in(req.session.socketId).emit('user', req.user)
//    res.end()
// })
// router.post(`/:socialnet`)
const passport = require(`passport`)
const { Strategy: TwitterStrategy } = require('passport-twitter')

passport.use(`twitter`, new TwitterStrategy(
   CONSTS.TWITTER_CONFIG,
   (accessToken, refreshToken, profile, cb) => {
      cb(null, { accessToken, refreshToken, profile, socialNetwork: `twitter` })
   }
))

router.get('/twitter', function (req, res, next) {
   // const { u_id } = req.query
   req.session.u_id = req.query.u_id
   // const state = 696912
   // u_id ? Buffer.from(JSON.stringify({ u_id })).toString('base64') : null
   console.log( req.session.u_id)
   const authenticator = passport.authenticate('twitter')
   authenticator(req, res, next)
   // passport.use(`twitter`, new TwitterStrategy(TWITTER_CONFIG, (aT, rT, p, cb) => {
   //    console.log(at)
   //    console.log(rT)
   //    console.log(p)
   //    console.log(cb)
   // }))
   // passport.authenticate(
   //    'twitter', (
   //       { callbackURL: `http://127.0.0.1:8080/callback/twitter?u_id=${req.params.u_id}` }
   //    )
   // )(req, res, next)
   // authenticate_media(`twitter`, req.params.u_id)
})
// router.get('/facebook', Auth.facebook)

router.get('/callback/twitter', passport.authenticate(
   'twitter'), (req, res) => {
      const { state } = req.query
      // const { u_id } = JSON.parse(Buffer.from(state, 'base64').toString())
      // authenticate_media(`twitter`,req.query.u_id)
      // io.in(req.session.socketId).emit('user', req.user)

      // {
      //    callbackURL: "http://127.0.0.1:8080/callback/twitter",
      //    successRedirect: '/#upload', failureRedirect: '/#upload'
      // })
      console.log(`callback`)
      console.log(req)
      // console.log(u_id)
      res.end()
   })
// router.get('/callback/facebook', Auth.facebook, (req, res) => {
//    // io.in(req.session.socketId).emit('user', req.user)
//    res.end()
// })
router.post(`/save`, (req, res) => {
   //dbmethod for saving socialNet (req.body.socialData)
})
router.post(`/post`, async (req, res) => {//
   console.log(req.body)
   // let userKeys = await sqlOperations.GetExcsitingClientAccessTokens(req.body.id, `Twitter`)
   let userKeys = {
      accessToken: 'vM1YWwAAAAAA9ZKAAAABaL0fZRE',
      accessTokenSecret: '4mPlyeqjIzH7p9ZXvQCxbSduLQCOuq2t'
   }
   console.log(userKeys)
   let currentUser = new Twitter({
      consumer_key: TWITTER_CONFIG.consumerKey,
      consumer_secret: TWITTER_CONFIG.consumerSecret,
      access_token_key: userKeys.accessToken,
      access_token_secret: userKeys.accessTokenSecret
   })
   currentUser.post(`statuses/update`, { status: req.body.text })
      .then((res) => {
      })
      .catch(err => {
         throw err
      })
   res.send(true)
})
router.post('/log-in', async (req, res) => {//req.body={ password: string , name: string }
   let id = await sqlOperations.getUserId(req.body.password, req.body.name)
   // console.log(`${id} here`)
   res.send(id)
})
router.post(`/register`, (req, res) => {
   let password = req.body.password
   let name = req.body.name
   sqlOperations.insertNewUserToDb(password, name)
   sqlOperations.getUserId(password, name)
      .then(id => {
         res.send(id)
      })
})

// router.get(`/posts`, function (req, res) {
//    console.log("1")
//    Posts.find({})
//       .exec(function (err, results) {
//          console.log(results)
//          res.send(results)
//       })
// })

// router.get(`/posts`,function(req,res){
//    let post=req.body

//    let post2= new Post({
//     postId:post.id,
//     userIdkey: post.id,
//     text: post.text,
//     img: post.img,
//     socialNetwork: ["Twitter"] //get the checked social networks
// })


// post2.save()


// })

module.exports = router