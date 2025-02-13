const express = require("express")

const mongoose =require("mongoose")
const Product = require("./models/product")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/ecommerce" 
).then(()=>{
console.log("Database connected successfully")

}).catch((error)=>{
    console.log(" Error in database connection", error)
    
})


//  Get request 
app.get("/product", async (req, res)=>{
    const products= await Product.find() 
res.status(200).json(products)
})


// post request 
app.post("/product", async (req, res)=>{
    const product = await Product(req.body).save()
    console.log("body", req.body)
    res.status(201).json(product)
    // ({
    //     response: "created",
    //     product: "shirt",
    //     item: 12,
    //     stock: "available"

    // })
})


// put Request 
app.put("/product/:id", async (req, res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log("body", req.body)
    console.log("params", req.params)
    console.log("query", req.query)
    res.status(200).json(product)
    // ({
    //     response: "updated",
    //     product: "shirt",
    //     item: 12,
    //     stock: "available"
    // })
})

// Delete Request 
app.delete("/product/:id", async (req, res)=>{
    const product = await Product.findByIdAndDelete(req.params.id) 
    console.log("body", req.body)
    res.status(200).json(product)
    // ({
    //     response: "deleted",
    //     product: "shirt",
    //     item: 12,
    //     stock: "available"
    // })
})



const port = 3000

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})