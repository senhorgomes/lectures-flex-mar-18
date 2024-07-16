import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);
  
  
    const increaseCounter = () => {
      setCounter(counter + 1);
    }

    return {counter, setCounter, increaseCounter};
}

export default useCounter;