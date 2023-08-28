const Swimming = require('../models/Swimming')
const User = require('../models/User')

module.exports.CreateStrokesWithDsitances = async (req, res, next) => {

    const strokes = await Swimming.insertMany([
        {
            Stroke: "Freestyle",
            Distances: [
                "64ec7fe82aa76de7315a8af7",
                "64ec7fe82aa76de7315a8af8",
                "64ec7fe82aa76de7315a8af9",
                "64ec7fe82aa76de7315a8afa",
                "64ec7fe82aa76de7315a8afb",
                "64ec7fe82aa76de7315a8af8"
            ]
        },
        {
            Stroke: "BreastStroke",
            Distances: [
                "64ec7fe82aa76de7315a8af7",
                "64ec7fe82aa76de7315a8af8",
                "64ec7fe82aa76de7315a8af9",
            ]
        },
        {
            Stroke: "BackStroke",
            Distances: [
                "64ec7fe82aa76de7315a8af7",
                "64ec7fe82aa76de7315a8af8",
                "64ec7fe82aa76de7315a8af9",
            ]
        },
        {
            Stroke: "Fly",
            Distances: [
                "64ec7fe82aa76de7315a8af7",
                "64ec7fe82aa76de7315a8af8",
                "64ec7fe82aa76de7315a8af9",
            ]
        },
        {
            Stroke: "Individual medley",
            Distances: [
                "64ec7fe82aa76de7315a8af9",
                "64ec7fe82aa76de7315a8afa",
            ]
        },
    ])

    try {
        res.json({
            strokes
        })
    }
    catch(error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports.StrokesOfSwimmer = async (req, res, next) => {

    try {
        const swimmer = await User.findById(req.body.swimmerID)
        const strokes = await Swimming.findById(req.body.strokeID)

        swimmer.SwimmingStrokes.push(strokes)

        await swimmer.save();

        res.json({
            success: true,
            swimmer
        })
    }
    catch(error) {
        console.log(error)
        res.json({
            success: false,
            error: error.message
        })
    }
}