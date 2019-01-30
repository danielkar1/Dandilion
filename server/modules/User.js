// const express = require
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    accessToken: String,
    refreshToken: String,
    profile: {}
})

let user = mongoose.model(`User`, userSchema)
module.exports = user