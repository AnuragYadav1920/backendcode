require('dotenv').config()
const express=require('express');
const app=express();
const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('hello anurag');
})
app.get('/login',(req,res)=>{
    res.send('<h1>welcome to the login page</h1>');
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})