import { useState, createContext } from "react";
import ComponentB from "./ComponentB.js";

export const userContext = createContext()

function  ComponentA (){

    const [user, setuser] = useState('wale')
    

    return(
        <>
            <div className="Box">
                <h3> ComponentA  </h3>
                <h2>hello {user}</h2>
                
                <userContext.Provider value={user} >

                <ComponentB  />
                </userContext.Provider>
                
            </div>
        
        </>
    );
}

export default ComponentA