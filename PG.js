const {Client} =require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    database: "delta",
    port: 5432,

    password: "argrd@123",
})
//connect to the database postgresql

client.connect()
.then(()=>{
    console.log("connected to the database")
}).catch(err=> console.log('error',err)).finally(()=>client.end())

