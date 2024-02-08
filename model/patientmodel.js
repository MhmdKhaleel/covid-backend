const mongoose=require("mongoose")

const patientschema=mongoose.Schema(
    {
        name:String,
        phoneno:String,
        address:String,
        symptoms:String,
        status:String
    }
)
module.exports=mongoose.model("patient",patientschema)