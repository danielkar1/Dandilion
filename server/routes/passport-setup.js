const passport = require(`passport`)
const Twitter = require(`twitter`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const CONSTS = require(`../../CONSTS`)
const User = require(`../modules/User`)

let TWITTER_CONFIG = CONSTS.TWITTER_CONFIG

const twitterAuth = passport.authenticate('twitter')

passport.use(new TwitterStrategy(
    TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ profile: profile })
            .then(res => {
                let user
                if (res) {
                    user = res
                } else {
                    user = new User({
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        profile: profile
                    })
                    user.save()
                }
                cb(null, user)
            })
    })
)

const addSocketIdToSession = (req, res, next) => {
    req.session.socketId = req.query.socketId
    next()
}

module.exports = {
    addSocketIdToSession,
    twitterAuth
}