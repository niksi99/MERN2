const User = require('../models/User')

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