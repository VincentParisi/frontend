import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import {URL} from './ApiMaster'
import http from './http-common'

const cl = console.log 

// -----------------------------------------------------------
//              Fourn List
// -----------------------------------------------------------

 const  ListAll = async () => {
    let url = `${URL}fourn/find`
    cl (" axios call " , url  )
    const  { data } = await axios.get(url ) ;
    cl ("ListAll  axios call data " , data)
   return data;
};

const  writeComment  = async (comment) => {
   let url = `${URL}fourn/writecom`
   cl (" axios call " , url  , comment  )
   const   data  = await axios.post(url  ,comment ) ;
   cl (" axios call data " , data)
  return data;
};

const  ListAllCom = async (refcomfourn) => {
   let url = `${URL}fourn/listcom?id=${refcomfourn}`
   cl (" axios call " , url  )
   const  { data } = await axios.get(url ) ;
   cl (" axios call data " , data)
  return data;
};



const FournService = {
   ListAll,
   writeComment,
   ListAllCom
};
  
export default FournService;


