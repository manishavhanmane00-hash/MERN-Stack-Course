const mongoose = require('mongoose')  // Library - connect mongodb database

//------------------------------
// Schema - Model (Data base table structure)
//-------------------------------

//Define structure of item document in MongoDB
const itemsSchema = new mongoose.Schema({

    // Item Name
    name: String,

    // Item Description
    description: String,

    // Selling Price of Item
    sellingPrice: Number,

    // Purchase Price of Item
    purchasePrice: Number,

    // Available Quantity
    quantity: Number,

    // Unit type (kg, pcs, box, liter etc)
    unit: String
})

  // Create collection/table called "Items"
  const Items = mongoose.model("Items", itemsSchema)


 
module.exports = Items