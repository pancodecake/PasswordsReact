//require raw http
const http = require('http')
//create io server
const { Server } = require('socket.io')
//express is what our backend will stand on
const express = require('express')
const app = express()
//require cors
const cors = require('cors')

//use cors in app
app.use(cors)

//create a server with express
const server = http.createServer(app)
//create new server with cors object in adjust your origin front and methods
const io = new Server(server,{
    cors:{
        origin:5031,
        methods:['GET','POST']
    }
})
//listen to connection and contiunse setting up listenrs insdie of it
io.on('connection',socket => {
    console.log(socket.id)
    
    socket.on('toBackMsg',data => {
        console.log(data)
        socket.emit('toFrontMsg',data)
    })
    
})
//listen to the server and put it in a http which is not being used
//emit to send event,on to listen to it

//listen to the server
server.listen('5099',() => {
    console.log('server is listening');
})
