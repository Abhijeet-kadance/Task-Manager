const express = require('express')

const app = express()

const port = 3000;

app.get('/hello',(req,res)=>{
    res.send("Welcome to Task Manager.")
})

app.listen(port,console.log("Sever is Running at Port:3000..."))