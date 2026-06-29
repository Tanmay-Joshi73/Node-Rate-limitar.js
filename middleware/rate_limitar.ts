import { request, Request,Response} from "express"
import { NextFunction } from "express"
type Pool = {
    count: number;
    lastRequest: number;
};

const requestPool: Record<string, Pool> = {};
export const count=async(req:Request,res:Response,next:NextFunction)=>{
const userIp=req.ip || '';
let now=Date.now();
const maxCount=10;
const timeLimit=15*60*1000;;
if(!requestPool[userIp]){
    requestPool[userIp]={count:1,lastRequest:now}  //Here we count the Latest time and Count no to check how much time a specified requet has been done by that IP
}
else{
    let timeAfterPreviousRequest=now-requestPool[userIp].lastRequest;
    if(timeAfterPreviousRequest<timeLimit){
        if(requestPool[userIp].count>=5){
            console.log('request has been reached')
            throw new Error("Cannot Request has been reahced")
        }
        else{
            console.log("Still have time and count")
            requestPool[userIp].count++;
            requestPool[userIp].lastRequest=now;
        }
    }
    else{
        requestPool[userIp].count=1;
        requestPool[userIp].lastRequest=now
    }
}
next()
}

                                         



;