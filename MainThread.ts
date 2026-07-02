import { parentPort } from "worker_threads";
const calculation=()=>{
    let sum=0;
for (let i = 0; i < 15_000_000_000; i++) {
        sum += i;
    }
return sum;
}

const result=calculation()
parentPort?.postMessage(result)