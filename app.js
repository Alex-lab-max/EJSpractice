const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    let name = req.body.name;
    res.render(__dirname + "/index.ejs", {name: name})

});

app.listen(3000, ()=>{
    console.log("server running in localhost:3000")
})