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


console.log("Hello Node JS Project Started")


const express = require('express')  //Node js framework
const app = express() // app - variable - store express function
const mongoose = require('mongoose')  // Library - connect mongodb database
const { stringify } = require('querystring')
const cors = require('cors') // Library - solve cors error 

app.use(express.json())  // Convert all data into json format 
app.use(cors())

// DB Connect

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("Mpngo DB Connected")).catch((error) => console.log(error))

// Schema - Model - Data base table structure
// values store database - structure 

const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    sellingPrice: Number,
    purchasePrice: Number,
    quantity: Number,
    unit: String
})


const Items = new mongoose.model("Items", itemsSchema)  // Table Name  // Collection Name - Items

// API 1 - Create Item
app.post("/api/create-item", async (req, res) => {
    try {
        const { name, description, sellingPrice, purchasePrice, quantity, unit} = req.body
        const saveItem = new Items(
            {
                name,
                description,
                sellingPrice,
                purchasePrice,
                quantity,
                unit            
            }
        )
        await saveItem.save()
        res.status(201).json({ message: "Item Created", data: saveItem })
    } catch { error } {
        console.log(error)
    }

})

// API 1 - Update/Edit Item 
app.put(" /api/update-item", (req, res) => {
    try {

    } catch { error } {
        console.log(error)
    }

})

// API 1 - Delete Item 
app.delete("/api/delete-item", (req, res) => {
    try {

    } catch { error } {
        console.log(error)
    }

})

// API 1 - GetAll Item
app.get("/api/get-all-item", async (req, res) => {
    try {
        const items = await Items.find()

        res.status(200).json({ message: "Get all Item List", data: items })

    } catch { error } {
        console.log(error)
    }
})

// Health API 

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Running" })

})

// server Start

const PORT = 9090

app.listen(PORT, () => {
    console.log("server started")
})