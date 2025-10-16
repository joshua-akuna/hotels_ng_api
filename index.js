const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// initialize express app
const app = express()
const PORT = process.env.PORT || 5000

//mongodb connection
const connect = async()=> {
    try {
        mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw error;
    }
}

// app routes
app.get('/', (req, res)=> {
    connect();
    res.json('Hello world');
})

app.listen(PORT, ()=>{
    connect();
    console.log(`app listening on port ${PORT}`);
})