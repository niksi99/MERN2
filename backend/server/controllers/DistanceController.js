const Distance = require('../models/Distance')

module.exports.CreateDistances = async(req, res, next) => {

    const addedDistances = await Distance.insertMany([
        { Meters: 50 },
        { Meters: 100 }, 
        { Meters: 200 }, 
        { Meters: 400 }, 
        { Meters: 800 }, 
        { Meters: 1500 },      
    ])

    try {
        res.json({
            addedDistances
        })
    }
    catch(error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports.GetAllDistances = async (req, res, next) => {
    
    const distances = await Distance.find();
   
    try {
        res.json({
            distances
        })
    }
    catch(error) {
        res.json({
            success: false,
            error: error.message
        })
    } 
}