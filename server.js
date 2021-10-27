const express = require("express");
// const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/DigitalClockDB")

app.get("/", function(req, res) {
  // res.sendFile(__dirname + "/public/index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
  console.log("Server has started successfully")
});