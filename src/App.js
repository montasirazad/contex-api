import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count , setCount] = useState(0)
  return (
    <CategoryContext.Provider value = {[count, setCount]} >
      <h1>Contex API</h1>
      <p>count value = {count}</p>
      <Header   ></Header>
      <Home  ></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
