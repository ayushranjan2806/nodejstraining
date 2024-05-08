const express =require('express')
const {Pool} =require('pg')

const app=express();

const PORT =3000;

const pool =new Pool({
    user:'postgres',
    host:'localhost',
    database:'delta',
    password:'argrd@123',
    port:5432
})



app.use(express.json())

app.post('/items',async(req,res)=>{
    const {
        id,
        username,
        email

    }=req.body

    try {
        const newItem =await pool.query(
            "INSERT INTO users (id,username,email) VALUES($1,$2,$3) RETURNING *",
            [id,username,email]
        )
        res.json(newItem.rows[0])
        } catch (error) {
        console.error(error.message)

        res.status(500).send('server error')


    }


})

app.get('/items',async(req,res)=>{
    try{
        const allItems =await pool.query("SELECT * FROM users")
        res.json(allItems.rows)
    }catch(error){
        console.error(error.message)
        res.status(500).send('server error')
    }
})

app.put('/items/:id',async (req,res)=>{
    const {id} =req.params
    const{username,email}=req.body

    try{
        const updateItem =await pool.query(
            "UPDATE users SET username=$1,email=$2 WHERE id=$3 RETURNING *",
            [username,email,id]
           
        )
        console.log('item updates')
        res.json(updateItem.rows[0]);
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('server erro')
    }

    
})

app.get('/items')

app.listen(PORT,()=>{
    console.log(`server is running on port http://:  ${PORT}`)
})

