const passport = require(`passport`)
const Twitter = require(`twitter`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const CONSTS = require(`../../CONSTS`)
const User = require(`../modules/User`)

let TWITTER_CONFIG = CONSTS.TWITTER_CONFIG

const twitterAuth = passport.authenticate('twitter')

let twitterUser = new Twitter({
    consumer_key: TWITTER_CONFIG.consumerKey,
    consumer_secret: TWITTER_CONFIG.consumerSecret,
    access_token_key: ``,
    access_token_secret: ``
})

passport.use(new TwitterStrategy(
    TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        console.log(cb)

        // save the user right here to a database if you want
        let user = new User({ profile:profile })
        user.save()
        console.log(accessToken)
        console.log(refreshToken)
        twitterUser.access_token_key = accessToken
        twitterUser.access_token_secret = refreshToken

        cb(null, user)
    })
)

const addSocketIdToSession = (req, res, next) => {
    req.session.socketId = req.query.socketId
    // console.log(req)
    next()
}

module.exports = {
    addSocketIdToSession,
    twitterAuth
}