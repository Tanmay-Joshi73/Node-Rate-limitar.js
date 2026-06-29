import axios from "axios";
export  async function Run(){
for(let i =0;i<100;i++){
    console.log('request no',i+1);
    const request=await axios.get('http://localhost:8000/rate') 
    console.log("Request is this",request.data)
}
}
Run()