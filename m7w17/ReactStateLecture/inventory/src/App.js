import "./App.css";

import { useState } from 'react';
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";

function App() {
  const simpleBeverageList = ["Coffee","Espresso","Tea","Latte"];
  const [beverageList, setBeverageList] = useState(simpleBeverageList);
  const [newBeverage, setNewBeverage] = useState("");
  const complexBeverageList = [
    {
      id: "coffee",
      beverageName: "Coffee",
      options: ["Light", "Medium", "Dark", "Decaf"],
      image: "coffee-brew-icon.svg"
    },
    {
      id: "espresso",
      beverageName: "Espresso",
      options: ["Light", "Medium", "Dark", "Decaf"],
      image: "espresso-icon.svg"
    },
    {
      id: "tea",
      beverageName: "Tea",
      options: ["Black Tea", "Green Tea", "Herbal Tea", "Matcha"],
      image: "tea-kettle.svg"
    },
    {
      id: "latte",
      beverageName: "Latte",
      options: ["2%", "Half and Half", "Oat Milk", "Soy Milk"],
      image: "heart-coffee.svg"
    },
  ]
  // How in the world do we use this?
  // Getter -> is a variable used to retrieve the value of State
  // Setter -> is a funciton that set the new value of State
  // useState is a function that returns an array
  // That arrays contains two elements
  // -> [getter, setter]
  // useState supports any primitive data type and data structure. Pretty much everything except for functions
  // const counterState = useState(0); //-> Default value is the value that gets passed into useState
  
  
  // const getCounterState = counterState[0]; //-> Getter -> Reference/variable name
  // const setCounterState = counterState[1]; //-> Setter -> invokes/calls the rerender of the component
  
  let amountOfTimesButtonHasBeenClick = 0;
  
  // const increaseCounter = () => {
    //   // amountOfTimesButtonHasBeenClick++;
    //   // console.log(amountOfTimesButtonHasBeenClick)
    //   // getCounterState++;
    //   // const newValue = getCounterState + 1;
    //   // setCounterState(getCounterState + 1);
    //   setCounter(counter + 1);
    // }
    // We want to add more items to this list
    
  const addNewProduct =() => {
    // We need a new product -> Ice Cappuccino
    // Modify our state to add our new product
    // beverageList.push("Ice Cappuccino");
    //["Coffee","Espresso","Tea","Latte", "Ice Cappuccino"]
    // setBeverageList(beverageList);
    console.log(beverageList)
    // We shouldn't modify state directly.
    // Because if we it sometimes won't trigger a rerender
    // We need to grab the PREVIOUS state
    // Or we can use the spread operator to create a new array/object
    // const newArray = [...beverageList]
    // newArray.push("Ice Cappuccino")
    setBeverageList([...beverageList, newBeverage])
    setNewBeverage("");
  }
  return (
    <>
      <header>
        <img src="coffee-shop.svg" height="180px"/>
        <h1>Cafe React</h1>
        <input value={newBeverage} onChange={(e)=> setNewBeverage(e.target.value)}/>
        <button onClick={addNewProduct}>Add new product!</button>
      </header>
      <main>
        {/* We're mapping through the array, and for each element, we are returning the component ProductCard */}
        {beverageList.map((productName)=> <ProductCard key={productName + 1}productName={productName}/>)}
      </main>
    </>
  );
}

export default App;