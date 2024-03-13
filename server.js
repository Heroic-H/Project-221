const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);
const transporter=nodeMailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"gadgetack@gmail.com",
        pass:"fanf sppf tuji tyhc"
    },
    secure:true
})