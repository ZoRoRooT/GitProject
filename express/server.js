const express = require('express')
const app = express()
const port = 5000

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/about',(req,res)=>{
    res.send('hello about')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
