require('dotenv').config()
// or import 'dotenv/config' // for esm

console.log(process.env.PORT , "====>") // Remove  this after you're confirmed it is working 



// Backend project // Node Js // Express Js // DB - MongoDB
// APIs url -DB open 

// Import Express framework (Used to create server and APIs)
const express = require('express')

// Create express applicatin  instance 
const app = express()


// Import CORS library (Allows Frontend apps to call Backend APIs)
const cors = require('cors')

// Connect MongoDB Database
const { connectDB } = require('./config/db') // Inform Function from another file 


const { addItem , editItem , deleteItem , getAllItems } = require('./controllers/itemsControllers')
const { login, register } = require('./controllers/authControllers')
const { getDashboardCount } = require('./controllers/dashboardControllers')

// Middleware: Convert incoming request data into JSON format
// const userInfo ={ " name" : "HOC" }
app.use(express.json())

// Middleware: enable Cross-Origin Resource Sharing
app.use(cors())

//------------------------
// MongoDB Database Connection 
//-------------------------

connectDB()

// Auth  API's - Authentication API's 

app.post("/api/login" , login)
app.post("/api/register" , register)







// Item API --
// POST API to create new item
app.post("/api/create-item", addItem)


// PUT API used to update item
app.put("/api/update-item", editItem)



// DELETE API to remove item from database 
app.delete("/api/delete-item/:id", deleteItem)


// GET API to fetch all items from database 
app.get("/api/get-all-item", getAllItems)







// Dashboard API's 
// Get All Count to Show on Dashboard

app.get("/api/get-dashboard" , getDashboardCount)



// Simple API to check server is running or not
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Running" })

})



// Define port number where server will run 
const PORT = process.env.PORT || 1010

// Start express server
app.listen(PORT, () => {
    // Show message when server start
    console.log(`Server is Running  ${PORT}`)
})