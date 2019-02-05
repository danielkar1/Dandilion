const express = require('express')
const { Auth, addUidtoSession } = require(`./passport-setup`)
const router = express.Router()
const Twitter = require(`twitter`)
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

router.get('/twitter', addUidtoSession, Auth.twitter)
router.get('/facebook', addUidtoSession, Auth.facebook)

router.get('/callback/twitter', Auth.twitter, (req, res) => {
   const { accessToken, refreshToken, socialNetwork, profile } = req.user
   console.log(req.user)
   sqlOperations.insertTokensToDb(req.session.u_id, `'${socialNetwork}'`, accessToken, refreshToken, profile.id)
   res.end()
})
router.get('/callback/facebook', Auth.facebook, (req, res) => {
   res.end()
})
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