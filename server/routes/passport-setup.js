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

// const addSocketIdToSession = (req, res, next) => {
//     req.session.socketId = req.query.socketId
//     // console.log(req)
//     next()
// }

const authenticate_media = function(media, user_id){

    const Auth = {
        twitter: passport.authenticate('twitter', {callbackURL: `http://127.0.0.1:8080/callback/twitter?u_id=${user_id}`}),
        facebook: passport.authenticate(`facebook`)
    }   

    Auth[media]
}


module.exports = {
    // addSocketIdToSession,
    authenticate_media
}