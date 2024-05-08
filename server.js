const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello , world  ayush ranjangjgjgtj\n')
});

const Port =process.env.PORT || 5000;
server.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})