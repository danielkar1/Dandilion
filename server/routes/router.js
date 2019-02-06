const express = require('express')
const { Auth, addUidtoSession } = require(`./passport-setup`)
const router = express.Router()
const Twitter = require(`twitter`)
const { TWITTER_CONFIG } = require(`../../CONSTS`)
const Posts = require('../modules/Scheme')
const sqlOperations = require(`../modules/PopulateDb`)
const request = require(`request`)

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
   let twitterposter = currentUser.post(`statuses/update`, { status: req.body.text })
      .then((res) => {
         sqlOperations.savepost(res)
      })
      .catch(err => {
         throw err
      })
   let linkedinPost = {
      method: 'POST',
      url: 'https://api.linkedin.com/v2/shares',
      headers: {
         'cache-control': 'no-cache',
         Authorization: 'Bearer AQUYM3KLxBKP-jlbAmO7vTeRWbI4GK8iTC-BLfZVPxqcdRr4TsaDVDL_7d8f07uWCgmMEhtaThs_lebqSWAEpRYdWeCsBn9AGvQjfGJcXb22hHrW6cH-i6nc1hhvX3iV6YjZMZGhlywh_atNgIapCUq9atar2J27CObXzPBjtPW-A_zMEUp5p5bgk17ClJJsw0tVwbC0b0aFN_Qlf4Ur4V016VMQCDm-QyLgUUm4sz5H9af4LtKGeIC_sT2WMw9dPQCL2hiKIixvkc7sXUvvJ217MZYQylcIFQiwhTtjzB1EBX9oHndDkv-HWcj_04tzab6nl6e1aqHjmGWbSf-tFGExCb4hrA',
         'Content-Type': 'application/json'
      },
      body: {
         owner: 'urn:li:person:VcAHgAXQ1o',
         subject: 'Test Share 33',
         text: {
            text: `${req.body.text}`
         }
      },
      json: true
   }
   // "X-Restli-Protocol-Version": "2.0.0",
   let linkedposter = request.post(linkedinPost, (err, res) => {
      if (err) {
         console.log(err)
      }
      else {
         console.log(res)
      }
   })
   let poster = {
      linkedin: linkedposter(),
      twitter: twitterposter()
   }
   req.body.foreach(network => {
      poster[network]
   })
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