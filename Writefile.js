const express =require('express');

const fs =require('fs');

const app = express();

app.get('/writefile',(req,res)=>{
    const filepath='newfile.txt'
    const content ='hello ayusdhsh'

    fs.writeFile(filepath,content,'utf-8',(err)=>{
        if(err){
            return res.status(500).send('error writing file')
        }

        res.send(`file has been writtien.. ${content}`)

    });
});

const port =4000;

app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})