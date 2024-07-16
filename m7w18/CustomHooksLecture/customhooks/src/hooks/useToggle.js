import { useState } from 'react';

const useToggle  = (defaultValue) => {
    const [toggle, setToggle] = useState(defaultValue);

    const convertToggle = () => {
        // If the previous state is true => false
        setToggle((prev)=> !prev)
    }

    return {
        toggle,
        convertToggle
    }

}

export default useToggle;