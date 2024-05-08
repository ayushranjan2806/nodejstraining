const express =require('express')
const port =4000
const app = express()
app.get('/',(req,res)=>{
    res.send("hello world this is the express server");

})

app.get('/data',(res,req)=>{
    res.send('we are getting the data ');

})
app.listen(port ,()=>{
    console.log(`server is starting on ports ${port}`);
    
})
