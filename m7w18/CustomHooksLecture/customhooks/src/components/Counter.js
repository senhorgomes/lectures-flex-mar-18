import { useState } from "react";
import useCounter from "../hooks/useCounter";
function Counter() {

    const { counter, setCounter, increaseCounter } = useCounter();
    // const [counter, setCounter] = useState(0);
  
  
    // const increaseCounter = () => {
    //   setCounter(counter + 1);
    // }
    // Good name for our new counter hook?
    // useCounter
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={()=>increaseCounter()}>Click me!</button>
            <button onClick={()=>setCounter(counter - 1)}>Don't click me!</button>
        </>
     );
}

export default Counter;