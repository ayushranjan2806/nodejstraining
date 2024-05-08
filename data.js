const express =require('express');
const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    
    const datas ={
        title:'this is the ejs topic for rendering ',
        name:'John',
        age:20,
        hobbies:['coding','reading','playing'],
    };
    res.render('data',{datas})


});
const   PORT=3000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});