import axios from "axios";

const cl = console.log 
//export const  URL = "http://localhost:3100/"
const URL = "https://cloudrunservice-wzhlbo6uua-ew.a.run.app"
//https://cloudrunservice-wzhlbo6uua-ew.a.run.app/add?a=10&b=11


axios.create({
   headers: {
     "Content-type": "application/json"
   }
 });
 
// -----------------------------------------------------------
//              Fourn List
// -----------------------------------------------------------

 const  Add = async (a,b) => {
    let url = `${URL}/add?a=${a}&b=${b}`
    cl (" axios call " , url  )
    const  { data } = await axios.get(url ) ;
    cl ("ListAll  axios call data " , data)
   return data;
};


const CalcService = {
   Add,
};
  
export default CalcService;


