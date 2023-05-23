const express = require("express");
const app = express();
app.use(express.static('public'));
app.get("/", function(req, res){
  console.log(req);
  res.sendFile(__dirname + "/public/asdf.html");
});
app.get("/a", function(req, res){
  console.log(req);
  res.send("<h1>f</h1>");
});
app.listen (5000, function(){
  console.log("asdf");
});