const express = require('express')
const app = express()


app.use(function(req, res, next){
  console.log("middleware run");
  next();
});
app.use(function(req, res, next){
  console.log("ha chala run");
  next();
});

app.get("/", function(req, res){
  res.send("Tender Coconut")

}) 
app.get("/about", function(req, res){
  res.send("about anna ")

}) 


app.listen(3000)