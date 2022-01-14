import React, {useState} from "react"

export default function Counter() {
    const[number, setNumber]= useState();
    const[count, setCount]= useState(0);
    //function for the addition between the input number and the count
    function countA(){
       setCount(number+count);
    }
    //function for the subtraction of the number from the count
    function countR(){
      setCount(count-number);
    }

    return (
      <div>
        <input 
        type='number'
        placeholder='0'
        value={number} 
        onChange={(e)=>
        setNumber(parseInt(e.target.value))}></input>
        <button onClick={countA}>+</button>
        <button onClick={countR}>-</button>
        <p>Count: {count}</p>
      </div>
    )
}