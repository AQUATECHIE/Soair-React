
import { useState, useEffect, useRef } from "react";

function MyuseRef () {
    

    const [number, setnumber] = useState(0)
    const handleClick = () =>{
        setnumber(number + 1)
    }

    return(
        <>
            <h3> numer: {number}</h3>
            <button onClick={handleClick} >
                click me
            </button>
        </>
    );
}

export default MyuseRef