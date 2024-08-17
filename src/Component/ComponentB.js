import ComponentC from "./ComponentC.js";

function  ComponentB (){
    return(
        <>
            <div className="Box">
                <h3> ComponentB </h3>
                <ComponentC />
            </div>
        
        </>
    );
}

export default ComponentB