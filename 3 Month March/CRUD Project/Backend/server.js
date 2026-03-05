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
app.use(express.json())  // Convert all data into json format 

// DB Connect

mongoose.connect("mongodb://localhost:27017/item-database").then( () => console.log("Mpngo DB Connected") ).catch( (error) => console.log(error) )  

// Schema - Model - Data base table structure
// values store database - structure 

const itemsSchema = new mongoose.Schema({
    name : String,
    description : String,
    sellingPrice : Number
})


const Items = new mongoose.model("Items", itemsSchema)  // Table Name  // Collection Name - Items