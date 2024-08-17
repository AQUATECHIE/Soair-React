import { useEffect, useRef } from "react";

function Usingref () {

    const ref = useRef(0)
    
    useEffect(() =>{
        console.log("components rendered")
    })

    
    const handleClick = () =>{
        ref.current++;
        console.log(ref.current)
    }

    return(
        <>
            <h3> </h3>
            <button onClick={handleClick} >
                click me
            </button>
        </>
    );
}

export default Usingref