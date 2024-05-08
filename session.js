const express=require('express');
const cookieparser=require('cookie-parser');
const session=require('express-session');

const app=express();
app.use(cookieparser());
app.use(session({
    secret :'your-secret-key',
    resave :false,
    saveUninitialized:true
}))
app.get('/ayush',(req,res)=>{
    const username=req.cookies.username||"guest";

    res.send(`Hello ${username} !`);
})

app.get('/set-session/:username',(req,res)=>{
    req.session.name=req.params.username;
    res.send('session set');
})
app.get('/clear-session',(req,res)=>{
    req.session.destroy();
    res.send('session cleared');
})
const port=process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

