const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    // name is defined as column 
    name: {type: String,max: 150, required: true, unique: true, index: true,
},
},  
{timestamps:true},
)

module.exports = mongoose.model("Product", productSchema)



