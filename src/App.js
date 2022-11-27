import './App.css';
import React, { useState,  useEffect  } from 'react'
import CalcService from './axios/ApiCalc'

//https://cloudrunservice-wzhlbo6uua-ew.a.run.app

const cl = console.log 


function App() {
  const [data,setData] = useState (0)

  const handleClick = async  (e) => {
    let a =  document.getElementById("a").value 
    let b =  document.getElementById("b").value 
    let res = await  CalcService.Add (a,b)
    cl (" on Click res " , a , b  , res )
    setData(res)
  }

  return (
    <div className="App">
      <h1>Version 4.0  (API Call ) </h1>
       a: <input  type="text" id="a" name="a" /> 
       b: <input  type="text" id="b" name="b" /> 
       <br/><br/>
       <button onClick={handleClick}>Submit</button>
       <br/><br/>
       Somme <input readOnly type="text" id="c" name="c" value={data}/> 

    </div>
  );
}

export default App;
