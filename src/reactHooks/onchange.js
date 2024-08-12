import { useState } from "react";


function ChangeButton (){
    const [change, setChange] = useState("")

    const handleChange = (event) =>{
        setChange(event.target.value)

    }

    return(
        <>
            <div>
                <input value={change} onChange={handleChange} />
                <p> Name: {change} </p>
            </div>
        </>
    );
}

export default ChangeButton