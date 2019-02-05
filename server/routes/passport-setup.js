const passport = require(`passport`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const CONSTS = require(`../../CONSTS`)

passport.use(new TwitterStrategy(
    CONSTS.TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        cb(null, { accessToken, refreshToken, profile, socialNetwork: `twitter` })
    }
))
passport.use(new FacebookStrategy(
    CONSTS.FACEBOOK_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        cb(null, { accessToken, refreshToken, profile, socialNetwork: `facebook` })
    }
))

const addUidtoSession = (req, res, next) => {
    req.session.u_id = req.query.u_id
    next()
}

const Auth = {
    twitter: passport.authenticate('twitter'),
    facebook: passport.authenticate(`facebook`)
}

module.exports = {
    Auth,
    addUidtoSession
}