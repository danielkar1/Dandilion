const passport = require(`passport`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: LinkedInStrategy } = require(`passport-linkedin-oauth2`)

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
passport.use(new LinkedInStrategy(
    CONSTS.LINKEDIN_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
        cb(null, { accessToken, refreshToken, profile, socialNetwork: `linkedin` })
    }
))

const addUidtoSession = (req, res, next) => {
    req.session.u_id = req.query.u_id
    next()
}

const Auth = {
    twitter: passport.authenticate('twitter'),
    facebook: passport.authenticate(`facebook`),
    linkedin: passport.authenticate(`linkedin`),
}

module.exports = {
    Auth,
    addUidtoSession
}