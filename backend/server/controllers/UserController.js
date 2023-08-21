const User = require('../models/User')
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next) => {

    const { Username, Password } = req.body;
    if(Username == "") {
        return res.status(400).json({
            status: 'Fail',
            message: "UserName field must be filled"
        })
    }

    if(Password == "") {
        return res.status(400).json({
            status: 'Fail',
            message: "Password field must be filled"
        })
    }

    const usernameCheck = await User.findOne({ Username });
    if(usernameCheck !== null) {
        return res.status(400).json({
            status: 'Fail',
            message: "User with this Username aleready exists"
        })
    }

    const newUser = await User.create(req.body);

    try {
        res.status(200).json({
            newUser
        })
    }
    catch(error) {
        console.log(error)
        res.status(400).json({
            message: "Ne Radi"
        })
    }

}

module.exports.login = async (req, res, next) => {
    const { Username, Password } = req.body;
    if(Username == "") {
        return res.status(400).json({
            status: 'Fail',
            message: "UserName field must be filled"
        })
    }

    if(Password == "") {
        return res.status(400).json({
            status: 'Fail',
            message: "Password field must be filled"
        })
    }

    const userCheck = await User.findOne({ Username });
    if(!userCheck) {
        return res.status(400).json({
            status: 'Fail',
            message: "User doent exist!"
        })
    }

    const arePasswordMatched = await userCheck.ComparePassword_Hashed_NonHashed(Password)
    if(!arePasswordMatched) {
        return res.json({
            status: 'Fail',
            message: "Password are not same!"
        })
    }

    const TOKEN = jwt.sign(
        {id: userCheck._id, username: userCheck.Username},
        process.env.JWT_SECRET,
        { expiresIn: 900 } // 15mins
    )

    try {
        res.json({
            TOKEN
        })
    }
    catch(error) {
        console.log(error)
    }
}