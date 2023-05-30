const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>hello I am Shreyansh Gupta</h1>')
})
app.listen(3001,(err)=>{
    if(!err)console.log("port is listening on 3000");
})