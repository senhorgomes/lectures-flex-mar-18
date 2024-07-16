import "./App.css";

import { useState } from 'react';
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useApplicationData from "./hooks/useApplicationData";
import useStyle from "./hooks/useStyle";
function App() {
  // const {counter} = useCounter();
  const { 
    beverageList, 
    addNewProduct, 
    newBeverage, 
    setNewBeverage
  } = useApplicationData();
  const { toggle, convertToggle} = useToggle(false);
 
  const coords  = useStyle();
  // console.log(coords)

  return (
    <div className={toggle ? "light-mode" : "dark-mode"}>
      <header>
        <button onClick={()=>convertToggle()}>{toggle ? "☀️" : "🌑" }</button>
        <img src="coffee-shop.svg" height="180px"/>
        <h1>Cafe React</h1>
        {/* <h2>{counter}</h2> */}
        <input value={newBeverage} onChange={(e)=> setNewBeverage(e.target.value)}/>
        <button style={
          {backgroundColor: `rgb(0, ${coords.x/4}, ${coords.y/4})`}
          }  onClick={addNewProduct}>Add new product!</button>
        <Counter/>
      </header>
      <main>
        {beverageList.map((productName)=> <ProductCard key={productName + 1}productName={productName}/>)}
      </main>
    </div>
  );
}

export default App;