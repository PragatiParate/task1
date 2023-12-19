import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './button';

function App() {
  const [val1,setVal1] =useState(0);
  const [val2,setVal2] = useState(0);
  let [sum,setSum] = useState(0);
    
   const arr=[1,2,3,4,5]
   const btn = arr.map(num=><Button s={num}/>)

   const addval =() =>
  {
   setSum(parseInt(val1)+parseInt(val2))
   console.log('sum',sum)
  }
  return (
    
    <div className="App">
    
   
<input type='number' value={val1} onChange={(e)=> setVal1(e.target.value)}/>
<input type='number' value={val2} onChange={(e)=>setVal2(e.target.value)}/>
<br/>
<br/>
<button onClick={()=>addval()}> add </button>
<br/>
<span>calculation :{sum} </span>
<br/>
{btn}

    </div>


  );
}

export default App;
