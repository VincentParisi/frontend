import './App.css';
import React, { useState,  useEffect  } from 'react'
import CalcService from './axios/ApiCalc'

//https://cloudrunservice-wzhlbo6uua-ew.a.run.app

const cl = console.log 


function App() {

  const handleClick = async  (e) => {
    let a =  document.getElementById("a").value 
    let b =  document.getElementById("b").value 
    let res = await  CalcService.Add (a,b)
    cl (" on Click res " , a , b  , res )

  }

  return (
    <div className="App">
      <h1>Version 2.0  (API Call ) </h1>
       a: <input  type="text" id="a" name="a" /> 
       b: <input  type="text" id="b" name="b" /> 
       <br/><br/>
       <button onClick={handleClick}>Submit</button>
       <br/><br/>
       Somme <input  type="text"  name="c" /> 

    </div>
  );
}

export default App;
