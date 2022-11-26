import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import {URL} from './ApiMaster'
import http from './http-common'

const cl = console.log 
// -----------------------------------------------------------
//              Registration
// -----------------------------------------------------------

 const  login = async (credential ) => {
    let url = `${URL}registration/login`
    cl (" axios call " , url , credential )
    const  { data } = await axios.post(url ,   credential) ;
    cl (" axios call data " , data)
   return data;
};

const RegistrationService = {
   login,
};
  
export default RegistrationService;


