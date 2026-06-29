import express, { request } from 'express'
import { Request,Response } from 'express'
import { count } from './middleware/rate_limitar.js'
const app=express()
app.get('/Custom_limitar',count,(req:Request,res:Response)=>{
     
    res.send("This is the first initial response")
})
app.listen(8000,'127.0.0.1',()=>{
    console.log("Server is started")
})
