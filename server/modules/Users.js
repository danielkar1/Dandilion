// const express = require

// const CONSTS = require(`./CONSTS`)
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    profile:{}
})

let user = mongoose.model(`User`,userSchema)
module.exports = user

