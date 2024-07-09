import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    // const getCounterState = counterState[0]; //-> Getter -> Reference/variable name
    // const setCounterState = counterState[1]; //-> Setter -> invokes/calls the rerender of the component
  
  
    const increaseCounter = () => {
      // amountOfTimesButtonHasBeenClick++;
      // console.log(amountOfTimesButtonHasBeenClick)
      // getCounterState++;
      // const newValue = getCounterState + 1;
      // setCounterState(getCounterState + 1);
      setCounter(counter + 1);
    }
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={()=>increaseCounter()}>Click me!</button>
            <button onClick={()=>setCounter(counter - 1)}>Don't click me!</button>
        </>
     );
}

export default Counter;