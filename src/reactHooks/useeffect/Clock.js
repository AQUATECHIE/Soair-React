import { useState, useEffect } from "react";


function Clock () {
    const [time, setTime] = useState(new Date()) // to get current date and time

    useEffect(() =>{
        const intervalid = setInterval(() =>{
            setTime(new Date());
        }, 1000) // it update time every 1 second
        return() =>{
            clearInterval(intervalid);
        }
    }, [])

    function clockTime (){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "pm" : "am"

        hours = hours % 12 || 12;

        return` ${Zero(hours)}: ${Zero(minutes)}: ${Zero(seconds)} ${meridian}` // function getting our time
        
    }
    function Zero (number){
        return (number < 10 ? "0" : "") + number // without it we would be having a single number 
    }

    return(
        <>
            <div className="container">
                <div className="clock">
                    <h1>{clockTime()}</h1>

                </div>


            </div>
        </>

    );
}

export default Clock