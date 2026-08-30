const express=require("express"),http=require("http"),{Server}=require("socket.io"),path=require("path");
const app=express(),server=http.createServer(app),io=new Server(server);
app.use(express.static(path.join(__dirname,"public")));
io.on("connection",socket=>{
 socket.on("join-room",room=>{socket.join(room);socket.to(room).emit("peer-joined");});
 socket.on("signal",({room,data})=>socket.to(room).emit("signal",data));
});
const PORT=process.env.PORT||3000;server.listen(PORT,()=>console.log("WorkMobile running on "+PORT));