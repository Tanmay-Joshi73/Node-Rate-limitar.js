import express from 'express'
import { Request,Response } from 'express'
const app=express()
app.get('/rate',(req:Request,res:Response)=>{
    res.send("This is the first initial response")
})
app.listen(8000,'127.0.0.1',()=>{
    console.log("Server is started")
})
