import { useState, useEffect } from "react";



function UseE () {
    const [count, setCount] = useState (0)
    const [color, setColor] = useState ('green')
    useEffect( () =>{
        document.title = ` Count: ${count} ${color}`;
    },[count])


    const Addcount = () =>{
        setCount(count + 1)
    }
    const Sucount = () =>{
        setCount(count - 1)
    }
    const changecolo = () =>{
        setColor(color => color === 'green' ? "green " : "red")
    }

    return(
        <>
            <p style={{color: color}}> Count: {count} </p>
            <button onClick={Addcount}> Add </button>
             <button onClick={Sucount}> Minus</button>
            <button onClick={changecolo}> Change Color</button> 
        </>
    );
}

export default UseE