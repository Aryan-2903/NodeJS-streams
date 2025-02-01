const express = require("express");
const status = require("express-status-monitor");
const app= express();
const PORT=8000;
const fs = require("fs");

app.use(status());

//this route will create a stream for the data to be downloaded in chunks
app.get("/",(req,res)=>{
  const stream = fs.createReadStream("./sample.txt","utf-8");
  stream.on("data",(chunk)=>{
    res.write(chunk);
  })
  stream.on("end",()=>{
    res.end();
  })
})

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
})