const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const hotelRoute = require('./routes/hotelRoute')

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
//inbuilt middlewares
app.use(express.json())
app.use(express.urlencoded())

// app routes
app.use('/api/v1/hotels', hotelRoute)

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})