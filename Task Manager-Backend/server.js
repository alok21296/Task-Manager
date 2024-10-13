const express=require("express");
const app=express();
const connectDb = require("./Config/dbConnection");
const dotenv=require("dotenv").config()
const cors=require("cors")

connectDb();
const port=process.env.PORT || 5001

app.use(express.json())
app.use(cors())
app.use("/todo",require("./Routes/todoRoute"));


app.listen(port,()=>{
    console.log("App is listening on port:",port)
})
