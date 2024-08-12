import { useState, useEffect } from "react";


function Screen(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleSize = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() =>{
        window.addEventListener("resize", handleSize)
        console.log("event listener added")

        return () =>{
            window.removeEventListener("resize", handleSize)
            console.log("event listener remove")
        }

    }, [])


    


    return(
        <>
            <p> window width: { width}px </p>
            <p> window height: {height}px </p>
        </>

    );
}

export default Screen