"use client"
import { useState } from "react"

export default function Counter(){
    const[count,setCount]=useState(0);

    const handleClick=()=>{
      setCount(count+1)
    }
    return(
        <div>
           <button onClick={handleClick}>I am clicked {count} times</button>
        </div>
    )
}