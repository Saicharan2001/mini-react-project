import React , { useState , useEffect } from "react"

function Checker(){

    const [ num , setnum ] = useState(Number(localStorage.getItem("num")))

    useEffect(() => {
        localStorage.setItem("num", num)
    },[num])

    return(
        <div>
            <button onClick={() => setnum((num) => num+1)}>Number is { num }</button>

        </div>
    )

}

export default Checker
