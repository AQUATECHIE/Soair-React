import { useState } from "react";

 

function Color (){
    const [color, setColor] = useState("red")
    const handleColor = (event) =>{
        setColor(event.target.value)
    }
    return(
        <>
            <h1>color picker</h1>
            <div style={{backgroundColor:color}}>
                <p> selected colors: {color}  </p>

                

            </div>
            <label> select color</label>
                <input type="color" value={color} onChange={handleColor}/>

        </>
    );
}

export default Color