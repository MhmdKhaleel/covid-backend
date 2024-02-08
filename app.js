const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controller/patientrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://khaleel3936:khaleel3936@cluster0.qh3996x.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/patient",patientrouter)

app.listen(1001,()=>{
    console.log("Server Running")
})
