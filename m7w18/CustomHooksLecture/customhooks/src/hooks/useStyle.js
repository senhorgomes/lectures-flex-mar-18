import {useState, useEffect} from "react";

const useStyle = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    // First parameter is what should be called/invoked once the component is mounted
    // Second is when do we want this function called
    // Dependency array
    // [] -> This means the function inside of the useEffect only gets called once, and never again.
    useEffect(()=> {
        const handleMouseMove = (event)=> {
            setCoords({x: event.x, y:event.y})
        }
        // upon the component mounting, we need to add an event listener
        // document.addEventListener('mousemove', (event)=>handleMouseMove(event))
        document.addEventListener('mousemove', handleMouseMove)
        // Its our job to remove it
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    // We need capture the coordinates of our mouses position
    // Pass in the variables into the styling of our button

    // Is there a way that we can add things when a component mounts
    // And then remove them when a component unmounts?
    // useEffect
    // Date fetching
    return coords;
}

export default useStyle;