import React from "react"

export default function Counter() {

   // let count = 0

    const [count, setCount] =  React.useState(0)
 
    function incrementCounter() {
        //count = count +1
        setCount(count + 1)
        console.log(count)
    }

    return (
    
        <div>
            <h1> Counter </h1>

            <h2>Current value of count is: {count} </h2>

            <button onClick={incrementCounter}> Clikck to increment counter</button>
        </div>
    )
}