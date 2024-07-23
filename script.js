// const fs = require('fs');


// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done");
//     }
// })

// fs.copyFile("hello.txt", "./copy2/copy.txt", function(err){
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("done");
//     }
// })


// fs.unlink("hello.txt", function(err){
//     if(err) {
//         console.log(err.message);
//     }else console.log("done");
// })


const http = require('http');

const server = http.createServer(function(req, res){
  res.end("hello tender coconut");
})


server.listen(3000);

