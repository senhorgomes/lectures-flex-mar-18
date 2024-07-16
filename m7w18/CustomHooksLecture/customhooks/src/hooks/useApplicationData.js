import { useState } from 'react';

const useApplicationData = () => {
    const simpleBeverageList = ["Coffee", "Espresso", "Tea", "Latte"];
    const [beverageList, setBeverageList] = useState(simpleBeverageList);
    const [newBeverage, setNewBeverage] = useState("");

    // const complexBeverageList = [
    //     {
    //         id: "coffee",
    //         beverageName: "Coffee",
    //         options: ["Light", "Medium", "Dark", "Decaf"],
    //         image: "coffee-brew-icon.svg"
    //     },
    //     {
    //         id: "espresso",
    //         beverageName: "Espresso",
    //         options: ["Light", "Medium", "Dark", "Decaf"],
    //         image: "espresso-icon.svg"
    //     },
    //     {
    //         id: "tea",
    //         beverageName: "Tea",
    //         options: ["Black Tea", "Green Tea", "Herbal Tea", "Matcha"],
    //         image: "tea-kettle.svg"
    //     },
    //     {
    //         id: "latte",
    //         beverageName: "Latte",
    //         options: ["2%", "Half and Half", "Oat Milk", "Soy Milk"],
    //         image: "heart-coffee.svg"
    //     },
    // ]

    const addNewProduct = () => {
        // Setting an data structure for state
        // We can never modify state directly
        // Spread operator
        // setBeverageList([...beverageList, newBeverage])
        // Previous state -> prev
        setBeverageList((prev) => [...prev, newBeverage])
        setNewBeverage("");
    }

    return {beverageList, addNewProduct, newBeverage, setNewBeverage}
}

export default useApplicationData;