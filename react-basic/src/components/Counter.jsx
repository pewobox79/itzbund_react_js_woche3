import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    
    function increment(){
        setCount(prev => prev + 1)
    }

    function decrement(){
        setCount(prev => {
            if(prev == 0) return prev
            return prev - 1
        })
    }
    return <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>

        <button onClick={increment}>Erhöhen</button>
        <button onClick={decrement}>Reduzieren</button>
    </div>
}

export default Counter