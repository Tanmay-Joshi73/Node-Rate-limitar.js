import { Worker } from "worker_threads";
import path, { dirname } from "path";
import { worker } from "cluster";
const work=new Worker(path.resolve('./','dist/MainThread.js'))
setInterval(()=>{
    console.log("Hey this is just working fine")
},5000)
work.on('message',(result)=>{
    console.log(result)
})
work.on('error',(err)=>{
    console.log(err)
})
work.on('end',()=>{
    
})