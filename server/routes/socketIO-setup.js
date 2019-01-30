const socketio = require('socket.io')
const http = require('http')
const express = require('express')
const app = express()

class Socket{
    constructor(app){
        this.app = app
        this.server = http.createServer(app)
        this.io = socketio(this.server)
    }
}
const socket = new Socket(app)


module.exports = socket
