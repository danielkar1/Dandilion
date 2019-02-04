const passport = require(`passport`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const CONSTS = require(`../../CONSTS`)

passport.use(new TwitterStrategy(
    CONSTS.TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        cb(null, {accessToken, refreshToken, profile, socialNetwork:`twitter`})
    }
))
passport.use(new FacebookStrategy(
    CONSTS.FACEBOOK_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        cb(null, {accessToken, refreshToken, profile, socialNetwork:`facebook`})
    }
))

const addSocketIdToSession = (req, res, next) => {
    req.session.socketId = req.query.socketId
    // console.log(req)
    next()
}

const Auth = {
    twitter: passport.authenticate('twitter'),
    facebook: passport.authenticate(`facebook`)
}

module.exports = {
    addSocketIdToSession,
    Auth
}