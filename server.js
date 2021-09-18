const http=require("http")

const express=require("express")

const app=express()
const server=http.createServer(app)
const socketio=require("socket.io")
const io=socketio(server)

io.on("connection",(socket)=>{
    socket.on("start_btn_clicked",(data)=>{
        if (data.hasOwnProperty("code")){
            code=data.code
            if (code==="wxYzPnK2z"){
                io.emit("start_event",data)
            }
        }
    })
})

// /?code=wxYzPnK2z

app.use("/",express.static(__dirname + "/public"))

server.listen(8000,()=>{
    console.log("Started on http://localhost:8000/");
})