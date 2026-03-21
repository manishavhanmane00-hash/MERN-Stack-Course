// Backend Project


// Node Js
// Express  Js
// DB - MongoDB


//API List

// 1. API Create Item - Get data values from frontend (item details) and store into Database.

// 2. API Update Item - Get item details from frontend which item we need to update.

// 3. API Delete Item - Get item details from frontend and delete these record from Database.

// 4. ApI Get all Records - Get all records and show to UI frontend.



//Arrow Function - Without use Function keyword.

// const getData = () => {

//}

//Normal Function - Use Function keyword.

// function getData() {

// }


// Backend project // Node Js // Express Js // DB - MongoDB
// APIs url -DB open 

// Import Express framework (Used to create server and APIs)
const express = require('express')  

// Create express applicatin  instance 
const app = express()


// Import CORS library (Allows Frontend apps to call Backend APIs)
const cors = require('cors') 
const { connectDB } = require('./config/db')

// Middleware: Convert incoming request data into JSON format
app.use(express.json())  

// Middleware: enable Cross-Origin Resource Sharing
app.use(cors())

//------------------------
// MongoDB Database Connection 
//-------------------------

connectDB()

 



// POST API to create new item
app.post("/api/create-item" , addItem)


// PUT API used to update item
app.put("/api/update-item", editItem)



// DELETE API to remove item from database 
app.delete("/api/delete-item/:id", deleteItem )


// GET API to fetch all items from database 
app.get("/api/get-all-item", getAllItems )



// Simple API to check server is running or not
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Running" })

})



// Define port number where server will run 
const PORT = 9090

// Start express server
app.listen(PORT, () => {
    console.log("server started")
})