

// Rgiister User API 
const jwt = require("jsonwebtoken")
const Users = require("../models/userModel")

const register = async (req, res) => {
    try {

        const { name, city, mobileNo, email, password } = req.body


        const existingUser = await Users.findOne({ email : email})

        if(existingUser){
            return res.status(400).json({message : "This Email ID already Registered"})
        }


        const user = await Users.create({
            name,
            city,
            mobileNo,
            email,
            password

        })

        const token = jwt.sign({ userId: user._id, email: email }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })


        res.status(201).json({
            message: "Register Account  Successfull",
            data: user,
            token: token
        })

    } catch (error) {
        console.log(error)

        console.log(error)
        res.status(404).json({
            message: "Error while register account",
            error: error.message
        })
    }
}

// Login API


const login = async (req, res) => {
    try {

        const { email, password } = req.body

        const user = await Users.findOne({
            email, password
        })

        const token = jwt.sign({ userId: user._id, email: email }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })

        if (user) {
            res.status(201).json({
                message: "Login Successfulll",
                token: token
            })
        } else {
            res.status(404).json({
                message: "Login Failed",
            })
        }


        res.status(201).json({ message: "Login Successfull", })

    } catch (error) {
        console.log(error)

        console.log(error)
        res.status(404).json({
            message: "Error while register account",
            error: error.message
        })
    }
}


module.exports = { login, register }