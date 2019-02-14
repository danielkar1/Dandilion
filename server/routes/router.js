const express = require('express')
const request = require(`request`)
const Twitter = require(`twitter`)
const router = express.Router()
const sqlOperations = require(`../../src/PopulateDb`)
const { Auth, addUidtoSession } = require(`./passport-setup`)
const { TWITTER_CONFIG } = require(`../../CONSTS`)

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
   // console.log(req.user)
   const { accessToken, refreshToken, socialNetwork, profile } = req.user
   sqlOperations.insertTokensToDb(req.session.u_id, `'${socialNetwork}'`, accessToken, refreshToken, profile.id)
   res.end()
})
router.post(`/post`, async (req, res) => {
   poster = {
      linkedin: async () => {
         // "X-Restli-Protocol-Version": "2.0.0",
         let linkedinKeys = await sqlOperations.GetExcsitingClientAccessTokens(req.body.id, `linkedin`)
         let linkedinPost = {
            method: 'POST',
            url: 'https://api.linkedin.com/v2/shares',
            headers: {
               'cache-control': 'no-cache',
               Authorization: `Bearer ${linkedinKeys.accessToken}`,
               'Content-Type': 'application/json'
            },
            body: {
               owner: `urn:li:person:${linkedinKeys.SocialNetwork_id}`,
               subject: 'Test Share 33',
               text: {
                  text: `${req.body.text}`
               }
            },
            json: true
         }
         request.post(linkedinPost, (err, res) => {
            if (err) {
               console.log(err)
            }
            else {
               sqlOperations.savepost(res)
            }
         })
      },
      twitter: async () => {
         let twitterKeys = await sqlOperations.GetExcsitingClientAccessTokens(req.body.id, `twitter`)
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
      }
   }
   req.body.networks.forEach(network => {
      const tes = poster[network]
      tes()
   })
   res.send(true)
})
router.post('/login', async (req, res) => {
   let id = await sqlOperations.getUserId(req.body.password, req.body.name)
   // console.log(req)
   if (id) {
      res.send(id)
   } else {
      res.send(false)
   }
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

module.exports = router