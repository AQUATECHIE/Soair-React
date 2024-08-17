import { useContext } from "react";
import { userContext } from "./ComponentA";

function  ComponentD (){
    const user = useContext(userContext)

    return(
        <>
            <div className="Box">
                <h3> ComponentD </h3>
                <h1>Bye {user}</h1>
            </div>
        
        </>
    );
}

export default ComponentD