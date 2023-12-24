const http = require('http')
const cors = require('cors')
const express = require('express')
const { Server } = require('socket.io')
const app = express()
//cors important to fix bugs
app.use(cors())

//create server with htpp then io,adjust cors origin and methods
const server = http.createServer(app)
const io = new Server(server,{
        cors:{
            origin:5000,
            methods:['GET','POST']
        }
})

//listen to io 
io.on('connect',socket => {
    console.log('conneccted' + socket);
    io.on('join_room',room => {
        socket.join(room)
    })
    io.on('send_form_content',data => {
        console.log(data);
        data.broadcast.emit(data)
    })
})

//listen to the server
server.listen(3003,() => console.log('server is listening'))