import { request, Request,Response} from "express"
import { NextFunction } from "express"
const TokenLimit=10;

const refreshTime=1*60*1000;  ///This is the Time Limit in which token gete replinish 
type Pool={
    token:number,
    requestTime:number
}
const Bucket:Record<string,Pool>={};
export const tokenBucket=async(req:Request,res:Response,next:NextFunction)=>{
const userIp=req.ip || '';
const currenTime=Date.now(); //This will hold the current time for the request;
if(!Bucket[userIp]){
    Bucket[userIp]={token:TokenLimit-1,requestTime:currenTime};
}
else{
    if(Bucket[userIp].token==0){
        throw new Error("Request Cannot Be Replinish")
    }
    else{
        Bucket[userIp].token-=1;
        Bucket[userIp].requestTime=currenTime;
    }
}
next()
}

export const Replinish=()=>{
    for(let i in  Bucket){
        const bucket = Bucket[i] || {token:0,requestTime:0};
        if(bucket.token==TokenLimit) continue;

        else{
            bucket.token+=1;
        }
    }
}
    
