const express =require('express')

const fs = require('fs')

const app =express()

app.get('/eadfile',(req,res)=>{
    const filepath='hello.txt';
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(err){
            return res.status(500).send('error reading file') // 500 intenal server error
        }
        res.send(data)
    })
})

const port =4000;

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})