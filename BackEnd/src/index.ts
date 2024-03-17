import express from "express";
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";

const app = express()
app.use(cors())
app.use(express.json())
////=============================>>>>CONNECTING TO DATABASE
mongoose.connect(process.env.MONGODB_CONNETION_STRING as string)
.then(()=>console.log("CONNECTED TO DATABASE"))
.catch((err)=>console.log(err.message))

app.get("/test",async(req,res)=>{
    res.send("server created i think")
})

app.listen(7000,()=>{
    console.log("Server Is Up Baby ):")
})