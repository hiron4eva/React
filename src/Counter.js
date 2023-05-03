import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [note,setNote] = useState("none")
  const handleIncrement = () => {
    setCounter(counter + 1);
    setNote("Increment")
    
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    setNote("Decrement")
    
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1> The operation was {note} & {counter} </h1>;     
    </div>
  );
}

//     import {useState} from 'react'
// export default function Counter(){
//  const [counter,setCounter] =useState(0)
//  const [operation,setOperation]=useState("")
//  //first is variable to store data and second is set function
//  const handleIncrement =()=>{
//     setCounter(counter+1)
//     setOperation("INCREMENT")

//  }

//  const handleDecrement =()=>{
//     setCounter(counter-1)
//     setOperation("DECREMENT")

//  }
//     return(<div>
//         <h1>Counter is {counter}</h1>
//         <h1>Operation is {operation}</h1>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>

//     </div>)
// }
