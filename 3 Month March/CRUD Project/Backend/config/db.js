const mongoose = require('mongoose')

const connectDB = () => {
    try {

        // Connect Node.js server with MongoDB database
        // Common URL Same for all/database name 
        // mongodb://localhost:27017/item-database
        mongoose.connect("mongodb://localhost:27017/item-database")


            // If connection Successful show message in console 
            .then(() => console.log("Mongo DB Connected"))

            // If error occurs print error
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }