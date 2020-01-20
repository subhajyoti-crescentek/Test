const express=require("express");
const app=express();

app.get("/", function (req, res) {
    res.send("hello world again");
   });  
app.listen(3003,()=>{
    console.log("listening at 3003")
})