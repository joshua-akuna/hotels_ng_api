const express = require('express')
require('dotenv').config()
// initialize express app
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res)=> {
    res.json('Hello world');
})

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})