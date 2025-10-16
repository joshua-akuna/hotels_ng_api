const newHotel = (req, res)=> {
    res.json(`New hotel created`)
}

const updateHotel = (req, res)=>{
    res.json(`hotel with id:${req.params.id} updated`)
}

const deleteHotel =  (req, res)=>{
    res.json(`hotel with id:${req.params.id} deleted`)
}

const getHotel = (req, res)=>{
    res.json(`hotel with id:${req.params.id} received`)
}

const getAllHotels = (req, res)=>{
    res.json(`All hotels recieved`)
}

module.exports = { 
    newHotel, 
    updateHotel, 
    deleteHotel, 
    getHotel,
    getAllHotels
}