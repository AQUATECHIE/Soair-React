import { useState } from "react";
import './App.css'

function Use(){
    const[count, setCount] = useState(0)
    const update = () =>{
        setCount(count + 1)
    }
    const reduce = () =>{
        setCount(count - 1)
    }
    const updater = () =>{
        setCount(0)
    }


    return(
        <>
            <h1> count: {count} </h1>
            <button onClick={update}> click me</button>
            <button onClick={reduce}> click me</button>
            <button onClick={updater}> click me</button>
        
        </>
    );
}

export default Use