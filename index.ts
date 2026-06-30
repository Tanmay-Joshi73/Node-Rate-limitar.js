import express, { request } from 'express'
import { Request,Response } from 'express'
import { count} from './middleware/rate_limitar.js'
import { tokenBucket,Replinish } from './middleware/tokenBucket.js'

const app=express()
app.get('/Custom_limitar',count,(req:Request,res:Response)=>{
     
    res.send("This is the first initial response")
})

app.get('/tokenBucket',tokenBucket,(req:Request,res:Response)=>{
     
    res.send("This is the first initial response for the Token bucket system")
})
setInterval(Replinish,1*60)
app.listen(8000,'127.0.0.1',()=>{
    console.log("Server is started")
})
