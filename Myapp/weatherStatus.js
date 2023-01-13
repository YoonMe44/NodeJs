const express = require("express");
const https = require("https");
const app = express();
// const weather = require('./app.js')
app.get('/',function(req,resp){
    resp.sendFile(__dirname + "/weather.html"); 
});
(function(req,resp){
  resp.sendFile(__dirname + "/app.js");
});

app.listen(3000);
