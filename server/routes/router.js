const express = require('express')
const { Auth, addUidtoSession } = require(`./passport-setup`)
const router = express.Router()
const Twitter = require(`twitter`)
const { TWITTER_CONFIG } = require(`../../CONSTS`)
const Posts = require('../modules/Scheme')
const sqlOperations = require(`../modules/PopulateDb`)

router.get(`/`, function (req, res) {
   console.log("server is sain")
   res.send("router is running")
})
router.get('/twitter', addUidtoSession, Auth.twitter)
router.get('/facebook', addUidtoSession, Auth.facebook)
router.get('/linkedin', addUidtoSession, Auth.linkedin)
router.get('/callback/twitter', Auth.twitter, (req, res) => {
   const { accessToken, refreshToken, socialNetwork, profile } = req.user
   sqlOperations.insertTokensToDb(req.session.u_id, `'${socialNetwork}'`, accessToken, refreshToken, profile.id)
   res.end()
})
router.get('/callback/facebook', Auth.facebook, (req, res) => {
   const { accessToken, refreshToken, socialNetwork, profile } = req.user
   sqlOperations.insertTokensToDb(req.session.u_id, `'${socialNetwork}'`, accessToken, refreshToken, profile.id)
   res.end()
})
router.get('/callback/linkedin', Auth.linkedin, (req, res) => {
   console.log(req.user)
   const { accessToken, refreshToken, socialNetwork, profile } = req.user
   sqlOperations.insertTokensToDb(req.session.u_id, `'${socialNetwork}'`, accessToken, refreshToken, profile.id)
   res.end()
})
router.post(`/post`, async (req, res) => {//https://api.linkedin.com/v2/ugcPosts w/ {Request Body}
   let twitterKeys = await sqlOperations.GetExcsitingClientAccessTokens(req.body.id, `twitter`)
   let linkedinKeys = await sqlOperations.GetExcsitingClientAccessTokens(req.body.id, `linkedin`)
   let currentUser = new Twitter({
      consumer_key: TWITTER_CONFIG.consumerKey,
      consumer_secret: TWITTER_CONFIG.consumerSecret,
      access_token_key: twitterKeys.accessToken,
      access_token_secret: twitterKeys.accessTokenSecret
   })
   currentUser.post(`statuses/update`, { status: req.body.text })
      .then((res) => {
         sqlOperations.savepost(res)
      })
      .catch(err => {
         throw err
      })
   let linkedinPost = {
      "author": "urn:li:person:8675309",
      "lifecycleState": "PUBLISHED",
      "specificContent": {
         "com.linkedin.ugc.ShareContent": {
            "shareCommentary": {
               "text": "Hello World! This is my first Share on LinkedIn!"
            },
            "shareMediaCategory": "NONE"
         }
      },
      "visibility": {
         "com.linkedin.ugc.MemberNetworkVisibility": "PRIVATE"
      }
   }
   
   res.send(true)
})
router.post('/log-in', async (req, res) => {
   let id = await sqlOperations.getUserId(req.body.password, req.body.name)
   console.log(id)
   res.send(id)
})
router.post(`/register`, async (req, res) => {
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