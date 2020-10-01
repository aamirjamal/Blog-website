const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
  console.log(req.body.pageRedirectName);
  var pageName = req.body.pageRedirectName;
  if (pageName === "Sign Up"){
    res.sendFile(__dirname+"/signUpPage.html")
  }
  else{
    res.sendFile(__dirname+"/signInPage.html")
  }

})

app.listen(3000,function(){
  console.log("Listening on port 3000");
})
