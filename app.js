import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile("index.html")
});

app.post("/", function(req, res){
    let name = req.body.name;
    res.render("index.ejs", {name: name})
    console.log(__dirname)
});

app.listen(3000, ()=>{
    console.log("server running in localhost:3000")
})
//