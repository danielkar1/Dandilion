const passport = require(`passport`)
// const Twitter = require(`twitter`)
const { Strategy: TwitterStrategy } = require('passport-twitter')
const CONSTS = require(`../../CONSTS`)
// const User = require(`../modules/Users`)
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const sqlOperations = require(`../../src/PopulateDb`)
let TWITTER_CONFIG = CONSTS.TWITTER_CONFIG

const twitterAuth = passport.authenticate('twitter')

passport.use(new TwitterStrategy(
    TWITTER_CONFIG,
    (accessToken, refreshToken, profile, cb) => {
        profile = JSON.parse(JSON.stringify(profile))
        let name = profile.displayName
        TwitterId = profile.id
        console.log(name)
        sqlOperations.CheckIfExsict(name) ? null : sqlOperations.insertTokensToDb(accessToken, refreshToken, TwitterId)

        // )[0][`COUNT(1)`]?

        // User.findOne({ profile: profile })
        //     .then(user => {
        //     })
        cb(null, profile)
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