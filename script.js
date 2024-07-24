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
app.get("/profile", function(req, res){
return next(new Error("Something went wrong"));
}) 


// app.use((err, req, res, next) =>{
// console.error(err.stack);
// res.status(500).send('somrthing broke!')

// })


app.listen(3000)