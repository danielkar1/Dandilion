const socketio = require('socket.io')
const https = require('https')
const express = require('express')
const app = express()
const fs = require(`fs`)
const http = require(`http`)
const CONSTS = require('../../CONSTS.js')
const createServer = require(`auto-sni`)

class Socket {
    constructor(app) {
        this.app = app
        this.server = createServer({ 
            email: CONSTS.autosniCONFIG.email, 
            domains: [CONSTS.domain], 
            agreeTos: true 
        }, app)
        //     , {
        //     key: CONSTS.httpsCONFIG.key,
        //     cert: CONSTS.httpsCONFIG.cert,
        //     ca: CONSTS.httpsCONFIG.ca,
        //     requestCert: false,
        //     rejectUnauthorized: false
        // }
        // )
        this.io = socketio.listen(this.server)
    }
}
const socket = new Socket(app)


module.exports = socket
