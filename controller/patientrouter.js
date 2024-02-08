const express=require("express")
const patientmodel=require("../model/patientmodel")
const router=express.Router()

router.post('/add',async(req,res)=>{
    let data=req.body
    let patient=new patientmodel(data)
    let result=await patient.save()
    res.json({status:"success"})
})

router.get('/view',async(req,res)=>{
    let data=await patientmodel.find()
    res.json(data)
})

module.exports=router